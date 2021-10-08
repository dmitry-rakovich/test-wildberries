'use strict'

import { getCards } from './fakeData.js';

document.addEventListener('DOMContentLoaded', getCards);

// DOM Elements
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

// Global
let index = 0;

// Event Hundlers
const activeSlide = el => {
    for(let slide of slides) {
        slide.classList.remove('active');
    };
    slides[el].classList.add('active');
};

const activeDot = el => {
    for(let dot of dots) {
        dot.classList.remove('active');
    };
    dots[el].classList.add('active');
};

// Helper function
const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
};

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    };
};

const prevSlide = () => {
    if(index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    };
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

// Event Listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide switch
setInterval(nextSlide, 5000);

//Basket 
const btnBasketOpen = document.querySelector('.header__basket')
const basketModalWindow = document.querySelector('.basket__modal')
const btnBasketClose = document.querySelector('.close')

btnBasketOpen.addEventListener('click', () => {
        basketModalWindow.style.display = 'block'
})

btnBasketClose.addEventListener('click', () => {
        basketModalWindow.style.display = 'none'
})