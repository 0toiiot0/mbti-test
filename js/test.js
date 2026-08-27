// 공부 습관 자가진단 - 10문항, 그룹별(NT/NF/SJ/SP) 점수 합산
const QUESTIONS = [
  {
    q: "1. 새로운 과목을 시작할 때 나는?",
    options: [
      { text: "전체 개념 구조와 원리부터 파악한다", group: "nt" },
      { text: "이 과목이 나에게 어떤 의미가 있는지부터 생각한다", group: "nf" },
      { text: "교재 목차대로 처음부터 순서대로 공부한다", group: "sj" },
      { text: "일단 문제부터 풀어보면서 감을 잡는다", group: "sp" },
    ],
  },
  {
    q: "2. 공부 계획을 세울 때 나의 스타일은?",
    options: [
      { text: "목표를 먼저 정하고 효율적인 전략을 설계한다", group: "nt" },
      { text: "촘촘한 시간표를 만들고 계획대로 지키려 한다", group: "sj" },
      { text: "큰 틀만 정하고 그때그때 상황에 맞게 움직인다", group: "sp" },
      { text: "함께 공부하는 사람들과 분위기를 맞춰 계획한다", group: "nf" },
    ],
  },
  {
    q: "3. 시험이 다가올수록 나는?",
    options: [
      { text: "예상 문제와 출제 패턴을 분석해 전략을 짠다", group: "nt" },
      { text: "불안한 마음을 다잡아줄 응원이나 동기부여가 필요하다", group: "nf" },
      { text: "체크리스트를 만들어 하나씩 확인하며 안정감을 얻는다", group: "sj" },
      { text: "막판 집중력을 발휘해 벼락치기로 몰아붙인다", group: "sp" },
    ],
  },
  {
    q: "4. 어려운 개념을 이해할 때 가장 도움이 되는 방법은?",
    options: [
      { text: "직접 도식화하거나 나만의 이론으로 재구성해본다", group: "nt" },
      { text: "친구에게 설명하거나 함께 토론하며 이해한다", group: "nf" },
      { text: "교과서와 참고서의 설명을 여러 번 반복해서 읽는다", group: "sj" },
      { text: "실제 예시나 실습을 통해 몸으로 부딪히며 익힌다", group: "sp" },
    ],
  },
  {
    q: "5. 그룹 스터디에서 나의 역할은?",
    options: [
      { text: "논리적 허점을 짚어주고 토론을 이끈다", group: "nt" },
      { text: "분위기를 부드럽게 만들고 서로를 격려한다", group: "nf" },
      { text: "규칙과 진도를 체계적으로 관리한다", group: "sj" },
      { text: "즉흥적인 아이디어로 분위기를 환기시킨다", group: "sp" },
    ],
  },
  {
    q: "6. 공부가 잘 안 될 때 나를 다시 움직이게 하는 것은?",
    options: [
      { text: "더 똑똑한 방법이 있을 거라는 지적 호기심", group: "nt" },
      { text: "소중한 사람을 실망시키고 싶지 않은 마음", group: "nf" },
      { text: "해야 할 일을 미루면 안 된다는 책임감", group: "sj" },
      { text: "지금 당장 몸을 움직여 환경을 바꾸는 것", group: "sp" },
    ],
  },
  {
    q: "7. 노트 필기 스타일은?",
    options: [
      { text: "핵심 개념 간의 인과관계를 화살표로 정리한다", group: "nt" },
      { text: "색깔과 그림으로 감성적으로 꾸며 기억에 남긴다", group: "nf" },
      { text: "정해진 양식에 맞춰 꼼꼼하고 깔끔하게 정리한다", group: "sj" },
      { text: "필요한 것만 짧게 메모하고 나머지는 기억에 의존한다", group: "sp" },
    ],
  },
  {
    q: "8. 선생님이나 교수님의 피드백을 받을 때 나는?",
    options: [
      { text: "논리적으로 타당한지 스스로 다시 검증해본다", group: "nt" },
      { text: "그 말에 담긴 감정과 진심을 먼저 헤아린다", group: "nf" },
      { text: "지적받은 부분을 규칙으로 만들어 다음엔 틀리지 않으려 한다", group: "sj" },
      { text: "일단 받아들이고 바로 다음 문제로 넘어간다", group: "sp" },
    ],
  },
  {
    q: "9. 장기 프로젝트나 과제를 할 때?",
    options: [
      { text: "전체 로드맵을 먼저 그리고 효율적인 순서를 짠다", group: "nt" },
      { text: "팀원들과의 협업과 의미 부여를 중요하게 생각한다", group: "nf" },
      { text: "마감일을 기준으로 단계별 일정을 촘촘히 세운다", group: "sj" },
      { text: "마감 직전 몰입해서 한 번에 완성도를 끌어올린다", group: "sp" },
    ],
  },
  {
    q: "10. 나에게 가장 뿌듯한 공부 순간은?",
    options: [
      { text: "복잡한 문제의 원리를 스스로 깨우쳤을 때", group: "nt" },
      { text: "노력한 과정을 누군가 알아봐 줬을 때", group: "nf" },
      { text: "계획했던 목표를 빠짐없이 완수했을 때", group: "sj" },
      { text: "예상 밖의 방법으로 문제를 해결했을 때", group: "sp" },
    ],
  },
];

const GROUP_INFO = {
  nt: {
    name: "NT형 (분석가형)",
    types: "INTJ · INTP · ENTJ · ENTP",
    desc: "논리적 구조와 효율적인 전략을 세워 공부할 때 힘을 발휘하는 유형이에요. 원리를 이해하면 응용은 저절로 따라오는 스타일이죠.",
    page: "nt.html",
  },
  nf: {
    name: "NF형 (외교관형)",
    types: "INFJ · INFP · ENFJ · ENFP",
    desc: "의미와 동기부여가 확실할 때 몰입도가 폭발하는 유형이에요. 사람과의 연결과 감정적 안정이 학습의 원동력이 됩니다.",
    page: "nf.html",
  },
  sj: {
    name: "SJ형 (관리자형)",
    types: "ISTJ · ISFJ · ESTJ · ESFJ",
    desc: "계획과 반복을 통해 꾸준히 성실하게 성과를 쌓아가는 유형이에요. 체계적인 루틴이 있을 때 가장 안정감을 느낍니다.",
    page: "sj.html",
  },
  sp: {
    name: "SP형 (탐험가형)",
    types: "ISTP · ISFP · ESTP · ESFP",
    desc: "직접 부딪히며 몸으로 익히는 실전형 학습자예요. 짧고 굵은 몰입과 즉각적인 실습에서 최고의 효율을 보여줍니다.",
    page: "sp.html",
  },
};

const answers = new Array(QUESTIONS.length).fill(null);

function renderQuestions() {
  const form = document.getElementById("quiz-form");
  form.innerHTML = QUESTIONS.map((item, qIndex) => {
    const options = item.options
      .map((opt, oIndex) => {
        const id = `q${qIndex}-o${oIndex}`;
        return `
          <label class="quiz-option" data-q="${qIndex}" id="label-${id}">
            <input type="radio" name="q${qIndex}" id="${id}" value="${opt.group}" />
            ${opt.text}
          </label>`;
      })
      .join("");
    return `
      <div class="quiz-question">
        <h3>${item.q}</h3>
        <div class="quiz-options">${options}</div>
      </div>`;
  }).join("");

  form.addEventListener("change", (e) => {
    if (e.target.type !== "radio") return;
    const qIndex = Number(e.target.name.replace("q", ""));
    answers[qIndex] = e.target.value;

    document
      .querySelectorAll(`.quiz-option[data-q="${qIndex}"]`)
      .forEach((label) => label.classList.remove("selected"));
    document.getElementById(`label-${e.target.id}`).classList.add("selected");

    updateProgress();
  });
}

function updateProgress() {
  const answeredCount = answers.filter((a) => a !== null).length;
  const percent = Math.round((answeredCount / QUESTIONS.length) * 100);
  document.getElementById("quiz-progress-bar").style.width = `${percent}%`;
  document.getElementById("quiz-progress-label").textContent = `${answeredCount} / ${QUESTIONS.length} 문항 응답`;
}

function handleSubmit() {
  if (answers.includes(null)) {
    alert("모든 문항에 답변해주세요!");
    return;
  }

  const scores = { nt: 0, nf: 0, sj: 0, sp: 0 };
  answers.forEach((group) => scores[group]++);

  let topGroup = "nt";
  Object.keys(scores).forEach((group) => {
    if (scores[group] > scores[topGroup]) topGroup = group;
  });

  showResult(topGroup, scores);
}

function showResult(topGroup, scores) {
  const info = GROUP_INFO[topGroup];

  document.getElementById("quiz-form").style.display = "none";
  document.querySelector(".quiz-submit-wrap").style.display = "none";
  document.querySelector(".quiz-progress").style.display = "none";
  document.getElementById("quiz-progress-label").style.display = "none";
  document.querySelector(".section-title-wrap").style.display = "none";

  const resultBox = document.getElementById("quiz-result");
  resultBox.style.display = "block";
  resultBox.querySelector(".result-badge").textContent = topGroup.toUpperCase();
  resultBox.querySelector("h2").textContent = info.name;
  resultBox.querySelector(".result-types").textContent = info.types;
  resultBox.querySelector(".result-desc").textContent = info.desc;

  const scoreText = Object.keys(scores)
    .map((g) => `${g.toUpperCase()} ${scores[g]}점`)
    .join(" · ");
  resultBox.querySelector(".result-scores").textContent = scoreText;

  const groupLink = resultBox.querySelector(".btn-group-page");
  groupLink.href = info.page;
  groupLink.textContent = `${info.name} 공부법 보러가기`;

  window.__quizResultInfo = info;
  resultBox.scrollIntoView({ behavior: "smooth" });

  if (typeof gtag === "function") {
    gtag("event", "test_complete", { group: topGroup });
  }
}

function handleShare() {
  const info = window.__quizResultInfo;
  const shareText = info
    ? `나의 공부유형은 ${info.name}! MBTI 공부법 연구소에서 확인해보세요.`
    : "MBTI 공부법 연구소에서 나의 공부유형을 확인해보세요!";
  const shareUrl = window.location.href;

  if (navigator.share) {
    navigator.share({ title: "MBTI 공부법 연구소", text: shareText, url: shareUrl }).catch(() => {});
  } else {
    navigator.clipboard
      .writeText(`${shareText} ${shareUrl}`)
      .then(() => showToast("링크가 복사되었어요! 친구에게 공유해보세요 :)"))
      .catch(() => showToast("복사에 실패했어요. 직접 링크를 공유해주세요."));
  }
}

function showToast(message) {
  const toast = document.getElementById("share-toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();
  updateProgress();
  document.getElementById("quiz-submit-btn").addEventListener("click", handleSubmit);
  document.getElementById("share-btn").addEventListener("click", handleShare);
});
