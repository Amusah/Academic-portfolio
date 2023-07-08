const slider = document.querySelector('.main-head');
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');


// Carousel functionality
let sliderImages = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg'
];

let counter = 0;

const changeImg = () => {
    slider.style.transition = '4s ease-in';
    slider.style.backgroundImage = `url(${sliderImages[counter]})`
    counter++;
    if(counter === sliderImages.length){
        counter = 0;
    }
};

setInterval(changeImg, 9000);

/**************Nav toggle functionality**********/

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', ()=>{
        nav.classList.toggle('nav-open');
        burger.classList.toggle('toggle');
    });
});

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        if(nav.classList.contains('nav-open')){
            nav.classList.remove('nav-open');
            burger.classList.remove('toggle');
        }
    }
});