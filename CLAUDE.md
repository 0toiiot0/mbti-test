# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MBTI 공부법 연구소 — MBTI 유형별 공부법을 다루는 여러 페이지로 구성된 정적 HTML 콘텐츠 사이트.

## Design

- IBM(https://www.ibm.com/kr-ko) 디자인 시스템(Carbon Design System) 톤을 따른다: 플랫한 레이아웃, 얇은 1px 보더, 절제된 그림자.
- 포인트 컬러: IBM Blue (`--blue`, 라이트 `#0f62fe` / 다크 `#4589ff`) — 기존의 크림/보라 팔레트는 대체되었다.
- 폰트: IBM Plex Sans KR (Google Fonts), 실패 시 Pretendard/시스템 폰트로 폴백.
- 다크/라이트 모드 필수: `<html data-theme="dark|light">` 속성과 `css/base.css`의 `:root` / `:root[data-theme="dark"]` 토큰으로 전환한다. 상단 네비게이션의 테마 토글 버튼(`#theme-toggle`, `js/theme.js`)으로 전환하며 `localStorage`에 저장한다. 새 페이지를 추가할 때도 `<head>`에 테마 복원 인라인 스크립트, nav에 `.nav-right` 토글 버튼, `js/theme.js` 로드를 동일하게 포함해야 한다.
- 색상 등 스타일은 반드시 `css/base.css`의 CSS 변수(`--bg`, `--surface`, `--border`, `--text-primary`, `--text-secondary`, `--text-muted`, `--blue`, `--blue-hover`, `--blue-tint` 등)를 통해 지정한다. 라이트/다크 모두에서 자동 대응되도록 하드코딩된 색상 값을 새로 추가하지 않는다.
- 모바일 반응형 필수.

## Rules

- 서버, API, 백엔드 키 등을 절대 사용하지 않는다 — 정적 파일(HTML/CSS/JS)만으로 구성한다.
- 파일이 300줄을 넘으면 먼저 분리(리팩터링)를 제안하고, 사용자 승인 후 진행한다.
