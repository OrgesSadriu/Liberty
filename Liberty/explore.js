//navbar
const nav = document.querySelector('nav')
window.addEventListener("scroll", () => {
    let scroll=this.scrollY
    if(scroll>250) {nav.classList.add("scroll")}
    else{nav.classList.remove("scroll")}
})

//Card Slider 
const slider = document.getElementById('slider');
const images = document.querySelectorAll('.slide__container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 1;
const size = images[1].clientWidth;
console.log(size);

const slide = () => slider.style.transform = 'translateX('+ (-size * index) + 'px)';
slide();
const trnst = () => slider.style.transition = 'transform 0.25s ease-in-out';
const notrnst = () => slider.style.transition = 'none';

prev.addEventListener('click', () => {
    if(index < 1) return;
    trnst();
    index--;
    slide();
});

next.addEventListener('click', () => {
    if(index > 4) return;
    trnst();
    index++;
    slide();
});

slider.addEventListener('transitionend', () => {
    if(images[index].id === 'last') {
        notrnst();
        index = images.length - 4;
        slide();        
    }
    if(images[index].id === 'first') {
        notrnst();
        index = images.length - index - 2;
        slide();        
    }
});

setInterval(() => {
    trnst();
    index++;
    slide();
}, 3000);