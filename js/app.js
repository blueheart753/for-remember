const footers = document.querySelector(".foot");

const Ptag = document.createElement("p");

footers.append(Ptag);

Ptag.className = "about";

const copyRight = `Photo Designed by Freepik`;

Ptag.append(copyRight);

let searchInput;
searchInput = document.querySelector("#input");

searchInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    switch (searchInput.value) {
      case "war":
        location.href = "/view/war.html";
        break;

      case "veterans":
        location.href = "/view/veterans.html";
        break;
      case "timeLine":
        location.href = "/view/timeline.html";
        break;
      case "warDocument":
        location.href = "/view/warDocument.html";
        break;
      case "AboutUs":
        location.href = "/view/AboutUs.html";
        break;

      default:
        alert("검색어를 입력 또는 제대로 입력해주세요");
        break;
    }
  }
});
