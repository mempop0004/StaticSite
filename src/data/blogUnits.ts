import type { Locale } from '../config/i18n';
import { BLOG_ID } from '../config/site';

export const BLOG_UNIT_IDS = [
	'blog-ai-for-everyday-users',
	'blog-ai-for-developers',
	'blog-static-web-operations',
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
];

export function getBlogUnit(blogId: BlogUnitId) {
	return blogUnits.find((unit) => unit.id === blogId);
}

export const activeBlogUnits = blogUnits.filter((unit) => unit.id === BLOG_ID);

export function getActiveBlogUnit() {
	return activeBlogUnits[0];
}
