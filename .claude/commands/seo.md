프로젝트의 모든 HTML 페이지를 대상으로 아래 SEO/GEO 작업을 수행할 것.

1. 모든 html 파일의 `<title>`과 `<meta name="description">`를 각 페이지 내용에 맞게 서로 다르게 작성한다. (동일하거나 복사-붙여넣기한 title/description 금지)
2. 페이지당 `<h1>`이 정확히 1개만 존재하는지 확인하고, `header`/`nav`/`main`/`section`/`article`/`footer` 등 시멘틱 태그로 구조가 되어 있는지 점검·보완한다. 모든 `<img>`의 `alt` 속성이 내용을 제대로 설명하는지 점검한다.
3. 배포 주소를 기준으로 `sitemap.xml`과 `robots.txt`를 생성한다. 배포 주소를 모르면 먼저 사용자에게 물어보거나 git remote(예: GitHub Pages 주소)를 근거로 추정한 뒤 확인받는다. `robots.txt`에는 일반 검색엔진 크롤러뿐 아니라 GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot 등 AI 크롤러도 명시적으로 허용(Allow)한다.
4. (GEO) 본문의 소제목(h2/h3 등)을 질문형 문장으로 바꾸고, 해당 섹션의 첫 문장에서 그 질문에 바로 직접 답하도록 수정한다.
5. (GEO) "노력하세요", "도움이 됩니다" 같은 모호한 조언 문장을 구체적인 숫자·기간·근거(연구, 통계, 예시 등)를 포함한 문장으로 바꾼다.

작업 후 변경된 파일 목록과 각 항목별 반영 여부를 표로 요약해서 보고할 것.
