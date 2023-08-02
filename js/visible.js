const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const footer = document.querySelector(".foot");
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
  container3.style.display = "flex";
  container4.style.display = "flex";
  document.querySelectorAll(".bg").forEach((el) => {
    el.style.display = "block";
  });
  footer.style.display = "block";
}, 1200);
