export type Locale = 'ko' | 'en';

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: Locale[] = ['en', 'ko'];

export const NAV_LABELS: Record<Locale, { latest: string; search: string }> = {
	ko: {
		latest: '최신글',
		search: '검색',
	},
	en: {
		latest: 'Latest',
		search: 'Search',
	},
};

export const UPDATED_COPY: Record<Locale, string> = {
	ko: '마지막 수정',
	en: 'Last updated on',
};

export function localePrefix(locale: Locale) {
	return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

export function localePath(locale: Locale, path: string) {
	const normalizedPath = normalizePath(path);
	return `${localePrefix(locale)}${normalizedPath === '/' ? '' : normalizedPath}` || '/';
}

export function normalizePath(path: string) {
	if (!path || path === '/') {
		return '/';
	}

	const trimmed = path.replace(/\/+$/, '');
	return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
	const normalizedPath = normalizePath(pathname);
	return normalizedPath === '/ko' || normalizedPath.startsWith('/ko/') ? 'ko' : 'en';
}

export function getLocaleAgnosticPath(pathname: string) {
	const normalizedPath = normalizePath(pathname);

	if (normalizedPath === '/ko') {
		return '/';
	}

	if (normalizedPath.startsWith('/ko/')) {
		return normalizePath(normalizedPath.slice(3));
	}

	return normalizedPath;
}
