const wars = [
  {
    pic: "<img src='/src/war_first.png'>",
    description:
      "한국전쟁은 1950년 6월 25일 새벽에 북위 38°선 전역에 걸쳐 북한군이 불법 남침함으로써 일어난 한반도 전쟁이다. 광복 후 한반도에는 냉전체제 속에서 남북에 별개의 정부가 수립되었다. 이 과정에서 막강한 군사력을 갖춘 북한이 통일을 명분으로 전면적인 남침을 개시했다.",
  },
  {
    pic: "<img src='/src/war_second.jpg'>",
    description: "",
  },
  {
    pic: "<img src='/src/war_third.jpg'>",
    description: "",
  },
  {
    pic: "<img src='/src/war_fourth.jpg'>",
    description: "",
  },
];

const first_war = document.getElementById("radio1");
const second_war = document.getElementById("radio2");
const third_war = document.getElementById("radio3");
const fourth_war = document.getElementById("radio4");

const image_div = document.getElementById("imgdiv");
const result = document.getElementById("description");

function addpic(pic) {
  image_div.innerHTML = pic;
}

function addresult(description) {
  result.innerHTML = description;
}

function handleWarSelection(index) {
  addpic(wars[index].pic);
  addresult(wars[index].description);
}

first_war.addEventListener("click", () => {
  handleWarSelection(0);
});

second_war.addEventListener("click", () => {
  handleWarSelection(1);
});

third_war.addEventListener("click", () => {
  handleWarSelection(2);
});

fourth_war.addEventListener("click", () => {
  handleWarSelection(3);
});
