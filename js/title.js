let typingBool = false;
let typingIdx = 0;

let typingTxt = $(".Wellcome").text();

typingTxt = typingTxt.split("");

if (typingBool == false) {
  typingBool = true;
  let tyInt = setInterval(typing, 100);
}

function typing() {
  if (typingIdx < typingTxt.length) {
    $(".typing").append(typingTxt[typingIdx]);
    typingIdx++;
  } else {
    clearInterval(tyInt);
  }
}
