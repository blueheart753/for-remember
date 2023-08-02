const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

setTimeout(() => {
  document.querySelector(".typingWar").style.opacity = "0";
  document.querySelector(".Wellcome").style.opacity = "0";
  document.querySelector(".WellcomeWar").style.opacity = "0";
  document.querySelector(".typing").style.opacity = "0";
  document.querySelector(".titleAnimation").style.height = "0";
}, 1500);

setTimeout(() => {
  container.style.display = "block";
  container2.style.display = "flex";
}, 1200);
