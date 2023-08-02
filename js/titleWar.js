let WartypingBool = false;
let WartypingIdx = 0;

let WartypingTxt = document.querySelector(".WellcomeWar").textContent;
let WartyInt;
WartypingTxt = WartypingTxt.split("");

if (WartypingBool == false) {
  WartypingBool = true;
  WartyInt = setInterval(typing, 100);
}

function typing() {
  if (WartypingIdx < WartypingTxt.length) {
    document.querySelector(".typingWar").append(WartypingTxt[WartypingIdx]);
    WartypingIdx++;
  } else {
    clearInterval(WartyInt);
  }
}
