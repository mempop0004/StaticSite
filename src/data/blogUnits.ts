import type { Locale } from '../config/i18n';
import { BLOG_ID } from '../config/site';

export const BLOG_UNIT_IDS = [
	'blog-ai-for-everyday-users',
	'blog-ai-for-developers',
	'blog-static-web-operations',
	'blog-technical-blog-operations',
	'blog-developer-deployment-and-hosting',
	'blog-search-driven-web-operations',
	'blog-web-automation-and-ops-systems',
	'blog-solo-website-operations',
	'blog-web-content-production-system',
	'blog-real-world-web-troubleshooting',
] as const;

export type BlogUnitId = (typeof BLOG_UNIT_IDS)[number];

type LocalizedCopy = Record<Locale, string>;

export interface BlogUnit {
	id: BlogUnitId;
	topic: LocalizedCopy;
	type: 'operations';
	reader: LocalizedCopy;
	goal: LocalizedCopy;
	automationName: string;
	dailyHours: string;
	startDate: string;
	reviewDate: string;
	successSignal: LocalizedCopy;
	recordPath: string;
	measurement: string[];
	publishingLoop: Record<Locale, string[]>;
}

export const blogUnits: BlogUnit[] = [
	{
		id: 'blog-ai-for-everyday-users',
		topic: {
			ko: '일반인이 AI를 활용하는 방법',
			en: 'How everyday users can use AI',
		},
		type: 'operations',
		reader: {
			ko: '일반 사무, 공부, 콘텐츠 작업을 더 효율적으로 하고 싶은 사용자',
			en: 'People who want to use AI for everyday work, study, and content tasks',
		},
		goal: {
			ko: '일반 사용자가 실제 생활과 업무에 바로 적용할 수 있는 AI 활용법을 실전형 글로 연결한다.',
			en: 'Turn practical AI workflows for everyday users into a repeatable set of real-world guides.',
		},
		automationName: 'everyday-ai-usage',
		dailyHours: '1h',
		startDate: '2026-04-11',
		reviewDate: '2026-05-09',
		successSignal: {
			ko: '초보 사용자가 바로 따라 할 수 있는 활용 글에서 체류와 다음 글 이동이 발생한다.',
			en: 'Beginner-friendly practical posts generate dwell time and clicks into follow-up guides.',
		},
		recordPath: 'ops/28day-records/blog-ai-for-everyday-users.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 일반 사용자가 AI를 가장 현실적으로 시작하는 방법을 정리한다.',
				'후속 글에서 메일, 문서, 공부, 자료 정리처럼 상황별 활용으로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a practical guide for how everyday users should start using AI.',
				'Expand into follow-up posts for email, documents, study, and research tasks.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-ai-for-developers',
		topic: {
			ko: '개발자가 AI를 활용하는 방법',
			en: 'How developers can use AI',
		},
		type: 'operations',
		reader: {
			ko: '코딩, 디버깅, 리팩터링, 테스트, 문서화에 AI를 실무적으로 쓰고 싶은 개발자',
			en: 'Developers who want practical ways to use AI for coding, debugging, refactoring, testing, and documentation',
		},
		goal: {
			ko: '개발자가 코드 전체를 맡기지 않고도 AI를 실무 생산성에 연결하는 현실적인 워크플로를 쌓는다.',
			en: 'Build a practical set of workflows for developers who want to use AI without turning their codebase into a black box.',
		},
		automationName: 'developer-ai-usage',
		dailyHours: '1h',
		startDate: '2026-04-11',
		reviewDate: '2026-05-09',
		successSignal: {
			ko: '개발자가 AI를 좁은 범위부터 적용하는 글에서 체류와 후속 글 이동이 발생한다.',
			en: 'Practical developer AI posts produce dwell time and clicks into deeper workflow guides.',
		},
		recordPath: 'ops/28day-records/blog-ai-for-developers.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 개발자가 AI를 가장 현실적으로 시작하는 방법을 정리한다.',
				'후속 글에서 코딩, 디버깅, 테스트, 문서화 같은 세부 작업으로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a practical guide for how developers should start using AI.',
				'Expand into follow-up posts for coding, debugging, testing, and documentation workflows.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-static-web-operations',
		topic: {
			ko: '정적 웹사이트 운영',
			en: 'Static website operations',
		},
		type: 'operations',
		reader: {
			ko: '정적 사이트를 배포하고 검색, 이미지, 도메인, 운영 기준까지 안정적으로 관리하려는 운영자',
			en: 'Operators who want to run static websites with stable deployment, indexing, image, domain, and maintenance rules',
		},
		goal: {
			ko: '정적 웹사이트를 만들고 끝내는 수준이 아니라, 오래 운영할 수 있는 기준과 점검 루프를 쌓는다.',
			en: 'Build a repeatable operating system for static websites instead of stopping at deployment.',
		},
		automationName: 'static-site-ops',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '정적 사이트 운영 기준 글에서 체류와 후속 점검 글 이동이 발생한다.',
			en: 'Static site operations guides generate dwell time and clicks into deeper checklist posts.',
		},
		recordPath: 'ops/28day-records/blog-static-web-operations.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 정적 사이트 운영 전에 고정해야 할 기준을 정리한다.',
				'후속 글에서 배포, 인덱싱, 검색, 이미지, 도메인 같은 축으로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a practical guide to the rules you should lock before running a static site.',
				'Expand into deployment, indexing, search, image, and domain workflows.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-technical-blog-operations',
		topic: {
			ko: '기술 블로그 운영',
			en: 'Technical blog operations',
		},
		type: 'operations',
		reader: {
			ko: '기술 블로그를 오래 운영하면서 주제, 구조, 내부 링크, 이미지, 리뷰 기준을 체계화하려는 운영자',
			en: 'Operators who want a repeatable system for technical blog topics, structure, internal links, image rules, and review loops',
		},
		goal: {
			ko: '기술 블로그를 단발성 글 모음이 아니라 주제 단위와 운영 규칙이 있는 시스템으로 만든다.',
			en: 'Turn a technical blog from a loose set of posts into a system with topic units and operating rules.',
		},
		automationName: 'technical-blog-ops',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '기준 글에서 체류가 생기고, 후속 글로 이어지는 내부 이동이 발생한다.',
			en: 'Core operations posts generate dwell time and clicks into follow-up editorial guides.',
		},
		recordPath: 'ops/28day-records/blog-technical-blog-operations.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 기술 블로그 운영 전에 먼저 고정해야 할 기준을 정리한다.',
				'후속 글에서 주제 선정, 내부 링크, 이미지, 리뷰, 구조 같은 축으로 분리한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a guide to the rules you should lock before operating a technical blog.',
				'Expand into topic selection, internal links, image rules, review loops, and structure systems.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-developer-deployment-and-hosting',
		topic: {
			ko: '개발자용 배포와 호스팅',
			en: 'Developer deployment and hosting',
		},
		type: 'operations',
		reader: {
			ko: '배포 플랫폼, 호스팅 구조, 도메인 흐름, 비용 구조를 운영 기준으로 정하고 싶은 개발자와 운영자',
			en: 'Developers and operators who want stable rules for deployment platforms, hosting structure, domain flow, and cost shape',
		},
		goal: {
			ko: '배포와 호스팅 선택을 취향이나 익숙함이 아니라 운영 기준으로 바꾸는 시스템을 만든다.',
			en: 'Turn deployment and hosting choices from habit into a repeatable operating decision system.',
		},
		automationName: 'developer-deployment-hosting',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '배포와 호스팅 기준 글에서 체류와 후속 비교 글 이동이 발생한다.',
			en: 'Core deployment and hosting guides generate dwell time and clicks into comparison posts.',
		},
		recordPath: 'ops/28day-records/blog-developer-deployment-and-hosting.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 배포와 호스팅을 고르기 전에 먼저 고정해야 할 기준을 정리한다.',
				'후속 글에서 Cloudflare Pages, Vercel, Netlify, GitHub Pages 같은 비교 글로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a guide to the rules you should lock before choosing deployment and hosting.',
				'Expand into comparison posts for Cloudflare Pages, Vercel, Netlify, and GitHub Pages.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-search-driven-web-operations',
		topic: {
			ko: '검색 유입형 웹 운영',
			en: 'Search-driven web operations',
		},
		type: 'operations',
		reader: {
			ko: '인덱싱, 메타, 내부 링크, CTR, Search Console 흐름을 운영 기준으로 정하고 싶은 운영자',
			en: 'Operators who want stable rules for indexing, metadata, internal links, CTR, and Search Console workflows',
		},
		goal: {
			ko: '검색 유입을 우연이 아니라 운영 기준과 점검 루프로 관리하는 시스템을 만든다.',
			en: 'Turn search traffic from a vague outcome into a repeatable operating system with rules and checks.',
		},
		automationName: 'search-driven-web-ops',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '검색 운영 기준 글에서 체류와 후속 체크리스트 글 이동이 발생한다.',
			en: 'Core search operations posts generate dwell time and clicks into follow-up checklists.',
		},
		recordPath: 'ops/28day-records/blog-search-driven-web-operations.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 검색 유입형 웹 운영 전에 먼저 고정해야 할 기준을 정리한다.',
				'후속 글에서 인덱싱, 메타, 내부 링크, CTR, Search Console 점검 축으로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a guide to the rules you should lock before running a search-driven website.',
				'Expand into indexing, metadata, internal links, CTR, and Search Console checklist posts.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-web-automation-and-ops-systems',
		topic: {
			ko: '웹 자동화와 운영 시스템',
			en: 'Web automation and ops systems',
		},
		type: 'operations',
		reader: {
			ko: '반복 작업, 검증, 발행, 보고를 자동화 가능한 운영 시스템으로 묶고 싶은 운영자와 개발자',
			en: 'Operators and developers who want repeatable systems for automating recurring web operations, checks, publishing, and reporting',
		},
		goal: {
			ko: '웹 운영 업무를 개별 스크립트가 아니라 자동화 가능한 시스템 단위로 정리한다.',
			en: 'Turn recurring web operations into stable systems instead of one-off scripts.',
		},
		automationName: 'web-automation-ops-systems',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '자동화 기준 글에서 체류와 후속 체크리스트 글 이동이 발생한다.',
			en: 'Automation baseline posts generate dwell time and clicks into narrower ops checklists.',
		},
		recordPath: 'ops/28day-records/blog-web-automation-and-ops-systems.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 웹 자동화와 운영 시스템을 만들기 전에 먼저 고정해야 할 기준을 정리한다.',
				'후속 글에서 검증, 발행, 보고, 점검 루프 같은 축으로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a guide to the rules you should lock before building web automation and ops systems.',
				'Expand into checks, publishing, reporting, and recurring review loops.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-solo-website-operations',
		topic: {
			ko: '1인 웹사이트 운영',
			en: 'Solo website operations',
		},
		type: 'operations',
		reader: {
			ko: '혼자 웹사이트를 운영하면서 구조, 발행, 유지보수, 측정 기준을 단순하게 잡고 싶은 운영자',
			en: 'Solo operators who want simple rules for structure, publishing, maintenance, and measurement',
		},
		goal: {
			ko: '1인 웹사이트 운영을 감각이 아니라 최소 운영 규칙으로 지속 가능하게 만든다.',
			en: 'Make solo website operations sustainable through clear operating rules instead of ad hoc effort.',
		},
		automationName: 'solo-website-ops',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '1인 운영 기준 글에서 체류와 후속 운영 글 이동이 발생한다.',
			en: 'Solo operations baseline posts generate dwell time and clicks into maintenance guides.',
		},
		recordPath: 'ops/28day-records/blog-solo-website-operations.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 1인 웹사이트 운영 전에 먼저 고정해야 할 기준을 정리한다.',
				'후속 글에서 발행 루프, 유지보수, 측정, 우선순위 관리로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a guide to the rules you should lock before running a solo website.',
				'Expand into publishing loops, maintenance, measurement, and prioritization.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-web-content-production-system',
		topic: {
			ko: '웹 콘텐츠 제작 시스템',
			en: 'Web content production system',
		},
		type: 'operations',
		reader: {
			ko: '글, 이미지, 메타, 검수, 발행을 하나의 제작 시스템으로 묶고 싶은 운영자',
			en: 'Operators who want one system for writing, images, metadata, review, and publishing',
		},
		goal: {
			ko: '웹 콘텐츠 제작을 개별 작업이 아니라 재사용 가능한 생산 시스템으로 만든다.',
			en: 'Turn web content production into a reusable system rather than a chain of isolated tasks.',
		},
		automationName: 'web-content-production-system',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '제작 시스템 기준 글에서 체류와 후속 공정 글 이동이 발생한다.',
			en: 'Content system baseline posts generate dwell time and clicks into narrower production workflow guides.',
		},
		recordPath: 'ops/28day-records/blog-web-content-production-system.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 웹 콘텐츠 제작 시스템 전에 먼저 고정해야 할 기준을 정리한다.',
				'후속 글에서 글 구조, 이미지 슬롯, 메타, 검수, 발행 공정으로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a guide to the rules you should lock before building a web content production system.',
				'Expand into writing structure, image slots, metadata, review, and publishing stages.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
	{
		id: 'blog-real-world-web-troubleshooting',
		topic: {
			ko: '실전 웹 문제 해결',
			en: 'Real-world web troubleshooting',
		},
		type: 'operations',
		reader: {
			ko: '배포 이후 실제 웹사이트에서 생기는 오류를 빠르게 진단하고 재발 방지 기준까지 묶고 싶은 운영자와 개발자',
			en: 'Operators and developers who want fast diagnosis and prevention rules for real web failures after deployment',
		},
		goal: {
			ko: '웹 문제 해결을 단발성 대응이 아니라 증상, 원인, 점검 순서, 재발 방지까지 포함한 운영 시스템으로 만든다.',
			en: 'Turn web troubleshooting from one-off firefighting into an operating system with symptoms, causes, checks, and prevention.',
		},
		automationName: 'real-world-web-troubleshooting',
		dailyHours: '1h',
		startDate: '2026-04-12',
		reviewDate: '2026-05-10',
		successSignal: {
			ko: '문제 해결 기준 글에서 체류와 후속 오류 진단 글 이동이 발생한다.',
			en: 'Troubleshooting baseline posts generate dwell time and clicks into narrower failure guides.',
		},
		recordPath: 'ops/28day-records/blog-real-world-web-troubleshooting.md',
		measurement: ['search_traffic', 'page_depth', 'time_on_page', 'related_clicks', 'ops_cost'],
		publishingLoop: {
			ko: [
				'대표 글에서 실전 웹 문제 해결 전에 먼저 고정해야 할 기준을 정리한다.',
				'후속 글에서 404, asset 누락, redirect, crawl 실패, 배포 회귀 같은 축으로 확장한다.',
				'28일 기록 파일에 검색 유입, 체류, 다음 글 이동, 운영 시간을 남긴다.',
			],
			en: [
				'Lead with a guide to the rules you should lock before doing real-world web troubleshooting.',
				'Expand into 404s, asset failures, redirects, crawl errors, and deployment regressions.',
				'Track search traffic, dwell signals, related clicks, and operating time in the 28-day record.',
			],
		},
	},
];

export function getBlogUnit(blogId: BlogUnitId) {
	return blogUnits.find((unit) => unit.id === blogId);
}

export const activeBlogUnits = blogUnits.filter((unit) => unit.id === BLOG_ID);

export function getActiveBlogUnit() {
	return activeBlogUnits[0];
}
