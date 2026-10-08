const slider = document.querySelector(".slider");
const content = slider.querySelector(".slider-content");
const wrapper = slider.querySelector(".slider-content__wrapper");
const items = slider.querySelectorAll(".slider__item");

const prevBtn = slider.querySelector(".slider__btn-prev");
const nextBtn = slider.querySelector(".slider__btn-next");

let isAnimating = false
let direction = null

function getStep() {
    const gap = parseFloat(getComputedStyle(wrapper).columnGap) || 0
    return items[0].offsetWidth + gap
}

function slideNext() {
    if (isAnimating) return
    isAnimating = true
    direction = 'next'

    wrapper.style.transform = `translateX(-${getStep()}px)`
}

function slidePrev() {
    if (isAnimating) return
    isAnimating = true
    direction = 'prev'

    wrapper.style.transition = 'none'
    wrapper.prepend(wrapper.lastElementChild)

    wrapper.style.transform = `translateX(-${getStep()}px)`

    wrapper.offsetWidth

    wrapper.style.transition = '';
    wrapper.style.transform = 'translateX(0)';
}

wrapper.addEventListener('transitionend', (e) => {
    if (e.target !== wrapper) return

    if (direction === 'next') {
        wrapper.style.transition = 'none';
        wrapper.append(wrapper.firstElementChild);
        wrapper.style.transform = 'translateX(0)';
        wrapper.offsetWidth;
        wrapper.style.transition = '';
    }

    isAnimating = false
})

nextBtn.addEventListener('click', slideNext)
prevBtn.addEventListener('click', slidePrev)

//
//
//

const burgerEl = document.querySelector('.burger')
const menuEl = document.querySelector('.menu')
const overlay = document.querySelector('.overlay');

function openMenu() {
    menuEl.classList.add('is-open')
    document.body.classList.add('no-scroll')
    overlay.classList.add('is-active') 
}

function closeMenu() {
    menuEl.classList.remove('is-open')
    document.body.classList.remove('no-scroll')
    overlay.classList.remove('is-active')
}

burgerEl.addEventListener('click', () => {
    if (menuEl.classList.contains('is-open')) {
        closeMenu()
    } else {
        openMenu()
    }
})

menuEl.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
})

overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
})

window.matchMedia('(min-width: 741px)').addEventListener('change', (e) => {
    if (e.matches) closeMenu();
})