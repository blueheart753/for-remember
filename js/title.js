let typingBool = false;
let typingIdx = 0;

let typingTxt = document.querySelector(".Wellcome").textContent;

typingTxt = typingTxt.split("");
let tyInt;
if (typingBool == false) {
  typingBool = true;
  tyInt = setInterval(typing, 70);
}

function typing() {
  if (typingIdx < typingTxt.length) {
    document.querySelector(".typing").append(typingTxt[typingIdx]);
    typingIdx++;
  } else {
    clearInterval(tyInt);
  }
}
