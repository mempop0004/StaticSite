# Naming Rule

## Goal

- 이름만 보고 역할과 위치를 추측할 수 있어야 한다.
- 모호한 범용 이름을 피하고, 역할 기반 이름을 쓴다.
- 운영 문서와 앱 코드의 이름 규칙을 분리해 관리한다.

## Root Folder Naming

- 루트 운영 폴더는 짧고 역할이 분명한 단수 소문자 이름을 쓴다.
- 현재 허용 폴더는 `rule`, `checklist`, `ops`, `docs`, `queue`, `src`, `public`, `trash`다.
- 새 루트 폴더를 추가할 때는 기존 폴더로 해결할 수 없는지 먼저 확인한다.

## Operating Document Naming

- 규칙 문서는 `*-rule.md`를 쓴다.
- 점검 문서는 `*-checklist.md`를 쓴다.
- 절차 문서는 `*-flow.md` 또는 읽기 절차 성격이면 `*-read-order.md`를 쓴다.
- 상태 설명과 배경 문서는 `docs/` 아래에 두고 목적 기반 kebab-case 이름을 쓴다.

## App File Naming

- `src/config/` 설정 파일은 역할이 드러나는 짧은 이름을 쓴다.
- `src/content/` 콘텐츠 파일은 주제 기반 kebab-case를 쓴다.
- `src/pages/` 라우트 파일은 라우트 의미와 프레임워크 규칙을 따른다.
- `src/components/`, `src/layouts/`는 Astro 관례에 맞춰 PascalCase를 유지한다.
- 스타일 파일은 역할 기반 kebab-case 또는 기존 전역 파일명을 유지한다.

## Asset Naming

- 실제 사용하는 자산은 용도 기반 이름을 쓴다.
- 임시 자산, 샘플 자산, 더미 자산은 `trash/`로 이동한다.
- `placeholder`, `temp`, `sample`, `misc`, `stuff`, `test1` 같은 이름은 장기 보관 자산에 쓰지 않는다.

## Forbidden Naming

- `consts`, `utils2`, `temp`, `misc`, `stuff`, `final-final`, `test1` 같은 모호한 이름은 새로 만들지 않는다.
- 역할이 다른 파일에 같은 접두어를 무분별하게 반복하지 않는다.
- 임시 파일을 실제 운영 폴더에 오래 두지 않는다.
