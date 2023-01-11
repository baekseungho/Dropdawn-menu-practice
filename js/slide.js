let btn1 = document.querySelector('.slide-button1');
let btn2 = document.querySelector('.slide-button2');
let btn3 = document.querySelector('.slide-button3');

function slide1(){
  document.querySelector('.slide-list').style.transform='translateX(0)';
};
function slide2(){
  document.querySelector('.slide-list').style.transform='translateX(-100vw)';
};
function slide3(){
  document.querySelector('.slide-list').style.transform='translateX(-200vw)';
};

btn1.addEventListener('click',slide1);
btn2.addEventListener('click',slide2);
btn3.addEventListener('click',slide3);