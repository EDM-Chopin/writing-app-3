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

const kidneyTopics = [
  {
    title: "급성 신손상",
    summary:
      "신기능이 짧은 기간에 떨어지는 상태로, 신전성, 신성, 신후성 원인을 구분하는 접근이 핵심입니다.",
    priority: "저혈압, 탈수, 요로폐쇄, 조영제/NSAIDs 같은 신독성 노출 확인",
    tags: "AKI / 응급 / 감별",
    highlights: [
      "신전성, 신성, 신후성으로 나눠 병력과 소변 소견을 해석합니다.",
      "저혈압, 탈수, 패혈증, 신독성 약물, 폐쇄 여부를 초기에 확인합니다.",
      "고칼륨혈증, 대사성 산증, 폐부종이 있으면 긴급 처치가 우선입니다.",
    ],
    sections: ["핵심 개념", "원인 분류", "초기 검사", "위험 신호", "치료 방향"],
  },
  {
    title: "만성 콩팥병",
    summary:
      "지속적인 신기능 저하 또는 구조적 이상이 이어지는 질환군으로, 원인 파악과 합병증 관리가 함께 중요합니다.",
    priority: "원인 질환, eGFR 저하 속도, 단백뇨, 빈혈, 골무기질 이상 평가",
    tags: "CKD / 만성질환 / 추적관리",
    highlights: [
      "질환 자체보다 진행 속도와 합병증 여부를 같이 봐야 합니다.",
      "단백뇨, 혈압, 당뇨 조절은 진행 억제에서 핵심 축입니다.",
      "빈혈, 칼슘-인 대사 이상, 체액 과다를 추적 관리합니다.",
    ],
    sections: ["정의와 병기", "주요 원인", "합병증", "치료 원칙", "추적 포인트"],
  },
  {
    title: "신세뇨관산증",
    summary:
      "신장에서 산 배설 또는 중탄산 재흡수에 문제가 생겨 대사성 산증이 발생하는 상태입니다.",
    priority: "저칼륨혈증 여부, 고염소성 대사성 산증 패턴, 원위형과 근위형 감별",
    tags: "RTA / 산염기 / 전해질",
    highlights: [
      "정상 anion gap 대사성 산증에서 우선 떠올려야 할 신장 질환입니다.",
      "원위형, 근위형, 저알도스테론형을 전해질 패턴으로 구분합니다.",
      "원인 질환 교정과 함께 bicarbonate 보충이 치료의 축입니다.",
    ],
    sections: ["기본 개념", "유형 구분", "검사 해석", "연관 질환", "보정 치료"],
  },
  {
    title: "급성 신우신염",
    summary:
      "상부 요로 감염으로 발열, 옆구리 통증, 배뇨 증상을 동반할 수 있으며 중증도 평가가 중요합니다.",
    priority: "패혈증 징후, 임신, 폐쇄 동반 여부, 농양 가능성 확인",
    tags: "감염 / 요로 / 신장",
    highlights: [
      "발열과 옆구리 통증이 있으면 하부 요로감염보다 상부 감염을 먼저 의심합니다.",
      "패혈증, 임신, 폐쇄가 동반되면 입원 및 영상평가 필요성이 커집니다.",
      "항생제는 중증도와 기저질환, 균 감수성을 함께 고려해 정합니다.",
    ],
    sections: ["증상 특징", "진단 접근", "중증도 평가", "항생제 원칙", "입원 적응증"],
  },
  {
    title: "요로결석",
    summary:
      "급성 옆구리 통증과 혈뇨의 대표 원인으로, 폐쇄와 감염 동반 여부가 처치 우선순위를 바꿉니다.",
    priority: "발열 동반 폐쇄, 지속 통증, 신기능 저하, 단일 신장 여부 확인",
    tags: "결석 / 통증 / 응급",
    highlights: [
      "비조영 CT가 가장 중요한 검사이며 대부분의 결석을 확인할 수 있습니다.",
      "감염이 동반된 폐쇄는 즉시 배액이 필요한 응급상황입니다.",
      "작은 결석은 보존적 치료가 가능하지만 재발 예방 교육이 중요합니다.",
    ],
    sections: ["전형적 양상", "영상 선택", "응급 상황", "보존적 치료", "재발 예방"],
  },
  {
    title: "다낭성 신질환",
    summary:
      "유전성 낭종성 질환으로 고혈압, 혈뇨, 신기능 저하와 함께 가족력 확인이 중요합니다.",
    priority: "가족력, 간 낭종/뇌동맥류 같은 신장 외 합병증, 혈압 관리",
    tags: "유전 / 낭종 / CKD",
    highlights: [
      "가족력과 영상 소견이 진단의 중요한 단서입니다.",
      "신장 외 합병증으로 간 낭종과 뇌동맥류를 함께 의식해야 합니다.",
      "혈압 조절과 장기 신기능 추적이 관리의 중심입니다.",
    ],
    sections: ["유전 배경", "임상 양상", "진단 단서", "합병증", "관리 전략"],
  },
  {
    title: "신장 생리와 이뇨제",
    summary:
      "세뇨관 각 부위의 재흡수와 분비, 그리고 이뇨제가 어느 수송체를 막는지 연결해서 이해하는 주제입니다.",
    priority: "PT, LoH, DT, CD의 기능 차이와 관련 이뇨제 및 유전 증후군 연결",
    tags: "생리 / 세뇨관 / 이뇨제",
    highlights: [
      "근위세뇨관은 대량 재흡수, 헨레고리와 원위세뇨관은 전해질 조절, 집합관은 최종 미세 조절을 맡습니다.",
      "Loop diuretic은 NKCC, thiazide는 NCC, amiloride는 ENaC, spironolactone은 aldosterone 축을 억제합니다.",
      "Bartter, Gitelman, Liddle 증후군을 각 수송체 이상과 연결하면 문제 풀이가 빨라집니다.",
    ],
    sections: ["세뇨관 구획", "주요 수송체", "연관 증후군", "이뇨제 기전", "대표 부작용"],
  },
];

const topicList = document.getElementById("topic-list");
const entryTitle = document.getElementById("entry-title");
const entrySummary = document.getElementById("entry-summary");
const entryPriority = document.getElementById("entry-priority");
const entryTags = document.getElementById("entry-tags");
const entrySections = document.getElementById("entry-sections");
const kidneyTopicList = document.getElementById("kidney-topic-list");
const kidneyTitle = document.getElementById("kidney-title");
const kidneySummary = document.getElementById("kidney-summary");
const kidneyPriority = document.getElementById("kidney-priority");
const kidneyTags = document.getElementById("kidney-tags");
const kidneySections = document.getElementById("kidney-sections");
const kidneyHighlights = document.getElementById("kidney-highlights");

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

function renderKidneyEntry(topic) {
  kidneyTitle.textContent = topic.title;
  kidneySummary.textContent = topic.summary;
  kidneyPriority.textContent = topic.priority;
  kidneyTags.textContent = topic.tags;
  kidneyHighlights.innerHTML = "";
  kidneySections.innerHTML = "";

  topic.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    kidneyHighlights.appendChild(item);
  });

  topic.sections.forEach((section) => {
    const item = document.createElement("li");
    item.textContent = section;
    kidneySections.appendChild(item);
  });
}

function renderKidneyTopics() {
  kidneyTopics.forEach((topic, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-item";

    if (index === 0) {
      button.classList.add("is-active");
      renderKidneyEntry(topic);
    }

    button.innerHTML = `
      <strong>${topic.title}</strong>
      <small>${topic.summary}</small>
    `;

    button.addEventListener("click", () => {
      kidneyTopicList
        .querySelectorAll(".topic-item")
        .forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderKidneyEntry(topic);
    });

    kidneyTopicList.appendChild(button);
  });
}

renderTopics();
renderKidneyTopics();
