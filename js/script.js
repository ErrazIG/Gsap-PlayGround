'use strict';


/* 3D EFFECT */
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const wrapper = document.querySelector('.wrapper-glasses');



btnLeft.addEventListener('click', function () {
    document.body.classList.add('left-active');
    document.body.classList.remove('right-active');

});

btnRight.addEventListener('click', function () {
    document.body.classList.add('right-active');
    document.body.classList.remove('left-active');
});



wrapper.addEventListener('click', function () {
    document.body.classList.remove('left-active');
    document.body.classList.remove('right-active');
});


/* GSAP */
gsap.registerPlugin(ScrollTrigger);

const glasses = document.querySelector('.glasses');

gsap.to(".wrapper-glasses", {
    scrollTrigger: {
        trigger: ".wrapper-glasses",
        start: "top top",
        end: "+=110%",
        scrub: true,
    },
    y: 400,
});

/* BALLOON */

const titleBalloon = document.querySelector('.title-balloon');
const wrapperBalloon = document.querySelector('.wrapper-balloon');

function getRandomColor() {
    const colors = ['#FF5733', '#fe0000', '#23a7f9', '#0f68a2', '#9fea23', '#4eba19', '#ff72da', '#2596be', '#a6dcfe', '#c97eff'];

    // Sélectionne une couleur aléatoire dans le tableau
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function getRandomLeft() {
    const array = ['25%', '35%', '45%', '55%', '65%'];
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];

}

titleBalloon.addEventListener('mouseenter', function () {
    const balloon = document.createElement('div');
    balloon.innerHTML = `
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <style type="text/css"> .st0{fill:;} </style>
        <g>
          <rect x="247.027" y="398.668" class="st0" width="10" height="10"></rect>
          <path class="st0" d="M256.007,0C170.213,0,102.569,65.824,106.25,169.118c3.843,107.508,80.015,174.195,130.395,188.945 l-14.211,26.225h67.132l-14.204-26.225c50.373-14.744,126.559-81.424,130.388-188.945C409.444,65.824,341.786,0,256.007,0z M221.274,84.154c-6.121,3.573-11.69,7.928-16.598,13.018c-10.813,11.218-18.444,25.49-22.597,42.856 c-1.767,7.416-9.209,11.994-16.625,10.227c-7.416-1.766-12-9.216-10.233-16.631c5.11-21.526,15.047-40.577,29.581-55.632 c-6.688-6.93,14.292-12.863,22.558-17.69c6.593-3.842,15.047-1.618,18.89,4.968C230.092,71.858,227.867,80.312,221.274,84.154z"></path>
        </g>
      </g>
    </svg>
  `;
    balloon.classList.add('balloon');
    balloon.style.fill = getRandomColor();
    balloon.style.left = getRandomLeft();
    titleBalloon.appendChild(balloon);
    balloon.classList.add('balloon-animation');
});