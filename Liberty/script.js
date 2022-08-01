//navbar
const nav = document.querySelector('nav')
window.addEventListener("scroll", () => {
    let scroll=this.scrollY
    if(scroll>250) {nav.classList.add("scroll")}
    else{nav.classList.remove("scroll")}
})

//sliding images

const slider = document.querySelector('.slider__images');
const image = slider.querySelectorAll('.image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 1;
const width = image[0].clientWidth;

slider.style.transform = 'translateX(' + (-width * index) + 'px)';

next.addEventListener('click', () => {
    if(index >= 3) return;
    slider.style.transition = 'transform 0.2s ease-in-out';
    index++;
    slider.style.transform = 'translateX(' + (-width * index)+ 'px)';
});

prev.addEventListener('click', () => {
    if(index < 0) return;
    slider.style.transform = 'translateX(' + (-width * index)+ 'px)';
    index--;
    slider.style.transition = 'transform 0.2s ease-in-out';
});

slider.addEventListener('transitionend', () => {
    if(image[index].id === 'first') {
        slider.style.transition = 'none';
        index = image.length - index;
        slider.style.transform = 'translateX(' + (-width * index)+ 'px)';
    }
    if(image[index].id === 'last') {
        slider.style.transition = 'none';
        index = image.length - 2;
        slider.style.transform = 'translateX(' + (-width * index)+ 'px)';
    }
});

setInterval(() => {
    slider.style.transition = 'transform 0.2s ease-in-out';
    index++;
    slider.style.transform = 'translateX(' + (-width * index) + 'px)'
}, 4000);
//Card Slider
const cardSlider = document.querySelector('#slider');
const slides = document.querySelectorAll('.slider__cards');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let counter = 1;
const size = slides[0].clientWidth;
console.log(size);

const slide = () => cardSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
slide();
const transition = () => cardSlider.style.transition = 'transform 0.2s ease-in-out';
const notransition = () => cardSlider.style.transition = 'none';

nextBtn.addEventListener('click', () => {
    if(counter > 4) return;
    transition();
    counter++;
    slide();
});

prevBtn.addEventListener('click', () => {
    if(counter < 1) return;
    transition();
    counter--;
    slide();
});

cardSlider.addEventListener('transitionend', () => {
    if(slides[counter].id === 'last') {
        notransition();
        counter = slides.length - 4;
        slide();        
    }
    if(slides[counter].id === 'first') {
        notransition();
        counter = slides.length - counter - 2;
        slide();        
    }
});

setInterval(() => {
    transition();
    counter++;
    slide();
}, 3000);
