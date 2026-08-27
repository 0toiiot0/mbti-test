# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MBTI 공부법 연구소 — MBTI 유형별 공부법을 다루는 여러 페이지로 구성된 정적 HTML 콘텐츠 사이트.

## Design

- 배경: 크림색 / 포인트 컬러: 보라
- 폰트: Pretendard
- 모바일 반응형 필수

## Rules

- 서버, API, 백엔드 키 등을 절대 사용하지 않는다 — 정적 파일(HTML/CSS/JS)만으로 구성한다.
- 파일이 300줄을 넘으면 먼저 분리(리팩터링)를 제안하고, 사용자 승인 후 진행한다.
