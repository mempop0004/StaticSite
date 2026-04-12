# Issue

- `issue_id: codespace-i18n-check`
- `title: Codespace에서 blog-1 한영 구조 확인`
- `status: current`

# Context

- blog-1 한영 구조 1차 구현과 locale 메타 보강은 끝났다
- 로컬 build는 쓰지 않고 Codespace를 검증 기준으로 쓴다
- 이제 Codespace에서 실제로 페이지가 열리는지와 기본 경로가 맞는지 확인해야 한다

# Current

- Codespace URL은 확인했지만 GitHub 로그인 요구로 직접 검증이 막혀 있다

# Next

- 사용자가 Codespace에서 dev 서버 또는 build 결과를 열어준다
- `/`, `/blog`, `/en`, `/en/blog`를 기준으로 실제 화면을 확인한다
- 확인 후 issue를 닫는다

# Done

- Codespace URL이 인증 없이 바로 열리는지 확인했다
- 현재 세션에서는 GitHub 로그인 요구로 직접 접근이 막힌다는 점을 확인했다

# Output

- `codespace_check: blocked by github auth`
- `blocker: direct access to github.dev requires authenticated session`

# Resume Prompt

- Codespace 로그인 세션이 가능한 상태에서 `/`, `/blog`, `/en`, `/en/blog`를 확인한다. 현재 세션에서는 GitHub 인증 때문에 직접 접근할 수 없다.
