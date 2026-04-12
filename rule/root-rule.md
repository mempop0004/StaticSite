# Root Rule

- 루트는 사람이 바로 읽는 운영 진입점이다.
- 운영 파일은 `rule/`, `checklist/`, `ops/`, `docs/`, `queue/`, `settings/` 아래에 둔다.
- 네이밍 규칙은 `rule/naming-rule.md`를 따른다.
- 실행 코드는 `src/`와 `public/`에만 둔다.
- 빌드 및 패키지 설정은 루트 파일로 유지한다.
- 새 운영 문서를 만들 때는 먼저 `rule`, 점검 항목은 `checklist`, 운영 절차는 `ops`, 설명 문서는 `docs`를 우선 검토한다.

## Root Folders

- `rule/`: 만들기 전에 따르는 규칙.
- `checklist/`: 만든 뒤 확인하는 점검 목록.
- `ops/`: 실제 운영 절차.
- `docs/`: 현재 상태, 개념 설명, 배경 문서.
- `queue/`: 현재 작업 상태와 진행 이슈.
- `settings/`: 블로그별 실제 설정값 원천.
- `src/`: 앱 코드와 콘텐츠.
- `public/`: 정적 공개 파일.
- `trash/`: 현재 운영에 쓰지 않는 임시, 더미, 폐기 예정 파일.

## Boundaries

- `src/` 안에는 운영 문서를 두지 않는다.
- `rule`, `checklist`, `ops`, `docs`에는 실행 컴포넌트나 라우트 파일을 두지 않는다.
- 루트에서 프로젝트를 읽을 때는 `README.md -> rule/ -> checklist/ -> ops/ -> docs/ -> queue/` 순서로 진입한다.
