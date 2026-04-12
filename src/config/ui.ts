import { readFileSync } from 'node:fs';
import path from 'node:path';

interface UiSettings {
	content_max_width: number;
	shell_max_width: number;
	mobile_gutter: number;
	desktop_gutter: number;
	english_intro_max_width: number;
	english_search_shell_width: number;
	english_search_copy_width: number;
	mobile_breakpoint: number;
}

const uiSettingsPath = path.join(process.cwd(), 'settings', 'blog-1', 'ui.json');
const uiSettings = JSON.parse(readFileSync(uiSettingsPath, 'utf-8')) as UiSettings;

export const CONTENT_MAX_WIDTH = uiSettings.content_max_width;
export const SHELL_MAX_WIDTH = uiSettings.shell_max_width;
export const MOBILE_GUTTER = uiSettings.mobile_gutter;
export const DESKTOP_GUTTER = uiSettings.desktop_gutter;
export const ENGLISH_INTRO_MAX_WIDTH = uiSettings.english_intro_max_width;
export const ENGLISH_SEARCH_SHELL_WIDTH = uiSettings.english_search_shell_width;
export const ENGLISH_SEARCH_COPY_WIDTH = uiSettings.english_search_copy_width;
export const MOBILE_BREAKPOINT = uiSettings.mobile_breakpoint;
