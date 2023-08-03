// JavaScript
const wars = [
    {
      pic: "<img src='/src/war_first.png'>",
      description: "",
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
  
  const first_war = document.getElementById('radio1');
  const second_war = document.getElementById('radio2');
  const third_war = document.getElementById('radio3');
  const fourth_war = document.getElementById('radio4');
  
  const image_div = document.getElementById('imgdiv');
  const result = document.getElementById('description');
  
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
  
  first_war.addEventListener('click', () => {
    handleWarSelection(0);
  });
  
  second_war.addEventListener('click', () => {
    handleWarSelection(1);
  });
  
  third_war.addEventListener('click', () => {
    handleWarSelection(2);
  });
  
  fourth_war.addEventListener('click', () => {
    handleWarSelection(3);
  });
  