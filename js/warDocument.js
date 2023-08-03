const container = document.getElementById("map");
let options;
options = {
  center: new kakao.maps.LatLng(37.5976, 127.0216),
  level: 0.1,
};

const map = new kakao.maps.Map(container, options);

const first_war = document.getElementById("radio1");
const second_war = document.getElementById("radio2");
const third_war = document.getElementById("radio3");
const fourth_war = document.getElementById("radio4");

const title = document.querySelector("#title");

const result = document.querySelector(".description");

const wars = [
  {
    titles: `미아리 전투`,
    results: `미아리 전투는 한국 전쟁 초기 북한군의 기습적인 전면 남침으로 38도 분계선에 연한 전 전선이 무너지자,
	육군본부는 38도 분계선으로부터 45km에 불과한 수도 서울에 대한 위협에 직면하게 되자 이응준(李應俊) 소장이 이끄는 국군 제5사단과 유재흥(劉載興) 준장이
	이끄는 제7사단이 미아리고개에서 치른
	최후의 서울 방어 전투이다.`,
  },
  {
    titles: `포천전투`,
    results: `1950년 6월 25일, 한국 전쟁에서 포천 북방의 38°선 일대에서 국군 제9연대 제2대대가 북한군 제3사단 예하 부대의 남침을 받았다. 국군은 제6중대와 제7중대를 전방 경계 지대에 배치하였으나, 북한군의 기습적인 공격으로 국군의 방어 진지가 파괴되고 많은 사상자가 발생했다. 북한군은 전차를 동원하여 공격을 가하였고, 국군은 분산 철수하였다. 추동리와 사직리에서도 교전이 발생하였으며, 아군의 방어 진지는 적의 포격으로 무너졌ek`,
  },
  {
    titles: `7•8 전투(천안 전투)`,
    results: `1950년 6월 25일 북한군의 남침으로 대한민국의 수도 서울이 함락되었다. 7월 3일 일본 규슈에 있던 미군 제24 사단이 긴급히 6·25 전쟁에 투입되어 7월 20일까지 16일 동안 오산·천안·대전 구간에서 서부 지역 지연작전을 벌였다. 미군 제24 보병 사단 제21 연대는 경부선을 중심으로 하여 북한 인민군 주력 부대를 상대로 전투를 벌이면서 대치하고 한국군은 평택에서 진천으로 선회하며 중부 전선에 투입되는 작전이었다. 미군은 7월 3일 제21 연대 스미스 특수 임무 부대 제1 대대가 오산 전투에 배치되었으며, 7월 5일 죽미령에서 밀려 후퇴하고 제34 연대가 투입되었다.`,
  },
  {
    titles: `낙동강 방어선 전투`,
    results: `낙동강 방어전투는 국가운명을 결정짓는 중요한 국면에서 최대의 위기를 극복하고 오히려 공세 이전의 기틀을 마련한 작전이었다. 개전 후 국군은 북한군 기습공격의 충격에서 벗어나지 못한 채 유엔군의 참전 지원에도 불구하고 상대적인 전력의 열세로 북한군의 남진을 저지하지 못하여 1950년 8월 1일에는 낙동강 선까지 후퇴하였다.`,
  },
];

function addTitle(titles) {
  title.textContent = titles;
}

function addresult(results) {
  result.textContent = results;
}

function handleWarSelection(index) {
  addTitle(wars[index].titles);
  addresult(wars[index].results);
}

first_war.addEventListener("click", () => {
  handleWarSelection(0);
  options = {
    center: new kakao.maps.LatLng(37.5976, 127.0216),
    level: 0.1,
  };
  const map = new kakao.maps.Map(container, options);
});

second_war.addEventListener("click", () => {
  handleWarSelection(1);
  options = {
    center: new kakao.maps.LatLng(37.91461692531372, 127.21674148387532),
    level: 0.1,
  };
  const map = new kakao.maps.Map(container, options);
});

third_war.addEventListener("click", () => {
  handleWarSelection(2);
  options = {
    center: new kakao.maps.LatLng(36.78297212755484, 127.16594586628185),
    level: 0.1,
  };
  const map = new kakao.maps.Map(container, options);
});

fourth_war.addEventListener("click", () => {
  handleWarSelection(3);
  options = {
    center: new kakao.maps.LatLng(35.38105602819884, 128.46253458315718),
    level: 4,
  };
  const map = new kakao.maps.Map(container, options);
});
