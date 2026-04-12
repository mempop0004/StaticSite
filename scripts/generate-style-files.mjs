import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { getBlogSettingsDir } from './lib/blog-settings.mjs';

const root = process.cwd();
const settingsDir = getBlogSettingsDir(root);
const outputDir = path.join(root, 'src', 'styles', 'generated');

const ui = JSON.parse(readFileSync(path.join(settingsDir, 'ui.json'), 'utf-8'));
const fonts = JSON.parse(readFileSync(path.join(settingsDir, 'fonts.json'), 'utf-8'));
const themePath = path.join(settingsDir, 'theme.json');
const theme = existsSync(themePath)
	? JSON.parse(readFileSync(themePath, 'utf-8'))
	: {};

mkdirSync(outputDir, { recursive: true });

const tokensCss = `:root {
  --content-max-width: ${ui.content_max_width}px;
  --shell-max-width: ${ui.shell_max_width}px;
  --gutter-mobile: ${ui.mobile_gutter}px;
  --gutter-desktop: ${ui.desktop_gutter}px;
  --english-intro-max-width: ${ui.english_intro_max_width}px;
  --english-search-shell-width: ${ui.english_search_shell_width}px;
  --english-search-copy-width: ${ui.english_search_copy_width}px;
  --mobile-breakpoint: ${ui.mobile_breakpoint}px;
}
`;

const fontsCss = `@import url('${fonts.english_import_url}');
@import url('${fonts.korean_import_url}');

:root {
  --font-en: ${fonts.english_font_var};
  --font-ko: ${fonts.korean_font_var};
}
`;

const themeCss = `:root {
${Object.entries(theme)
	.map(([key, value]) => `  --${key.replaceAll('_', '-')}: ${value};`)
	.join('\n')}
}
`;

writeFileSync(path.join(outputDir, 'tokens.css'), `${tokensCss}\n`, 'utf-8');
writeFileSync(path.join(outputDir, 'fonts.css'), `${fontsCss}\n`, 'utf-8');
writeFileSync(path.join(outputDir, 'theme.css'), `${themeCss}\n`, 'utf-8');
