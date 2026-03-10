const topics = [
  {
    title: "흉통",
    summary: "응급 원인 여부를 먼저 가르는 대표적인 증상 문서 템플릿",
    priority: "급성 관상동맥 증후군, 대동맥 박리, 폐색전 확인",
    tags: "증상 / 응급 / 순환기",
    sections: ["핵심 요약", "위험 신호", "감별 진단", "검사 접근", "초기 대응"],
  },
  {
    title: "발열",
    summary: "감염성 원인과 비감염성 원인을 함께 정리하는 기본 문서",
    priority: "패혈증, 면역저하, 여행력, 노출력 확인",
    tags: "증상 / 감염 / 전신",
    sections: ["정의", "문진 포인트", "위험군", "검사 계획", "치료 원칙"],
  },
  {
    title: "당뇨병",
    summary: "진단 기준과 합병증 관리, 약물 전략을 함께 다루는 질환 문서",
    priority: "저혈당, DKA/HHS, 장기 합병증 스크리닝",
    tags: "질환 / 내분비 / 만성질환",
    sections: ["병태생리", "진단 기준", "치료 목표", "약물 정리", "추적 관리"],
  },
  {
    title: "CBC 해석",
    summary: "빈혈, 백혈구 이상, 혈소판 이상을 빠르게 훑는 검사 문서",
    priority: "중증 빈혈, 급성 백혈병 의심, 출혈 위험 평가",
    tags: "검사 / 혈액 / 해석",
    sections: ["정상 범위", "이상 패턴", "의미 해석", "추가 검사", "주의 포인트"],
  },
];

const topicList = document.getElementById("topic-list");
const entryTitle = document.getElementById("entry-title");
const entrySummary = document.getElementById("entry-summary");
const entryPriority = document.getElementById("entry-priority");
const entryTags = document.getElementById("entry-tags");
const entrySections = document.getElementById("entry-sections");

function renderEntry(topic) {
  entryTitle.textContent = topic.title;
  entrySummary.textContent = topic.summary;
  entryPriority.textContent = topic.priority;
  entryTags.textContent = topic.tags;
  entrySections.innerHTML = "";

  topic.sections.forEach((section) => {
    const item = document.createElement("li");
    item.textContent = section;
    entrySections.appendChild(item);
  });
}

function renderTopics() {
  topics.forEach((topic, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-item";

    if (index === 0) {
      button.classList.add("is-active");
      renderEntry(topic);
    }

    button.innerHTML = `
      <strong>${topic.title}</strong>
      <small>${topic.summary}</small>
    `;

    button.addEventListener("click", () => {
      document
        .querySelectorAll(".topic-item")
        .forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderEntry(topic);
    });

    topicList.appendChild(button);
  });
}

renderTopics();
