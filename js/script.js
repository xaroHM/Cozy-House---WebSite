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



///

const pets = {
    katrine: {
        name: 'Katrine',
        subtitle: 'Cat - British Shorthair',
        text: 'Katrine is a calm and affectionate cat who loves quiet evenings on the sofa. She gets along well with other cats and is used to living indoors.',
        img: 'images/slider-img-1.jpg',
        details: {
            Age: '6 months',
            Inoculations: 'panleukopenia, rabies',
            Diseases: 'none',
            Parasites: 'none',
        },
    },
    jennifer: {
        name: 'Jennifer',
        subtitle: 'Dog - Labrador',
        text: 'Jennifer is a playful puppy full of energy. She is curious about everything around her and learns new commands very quickly.',
        img: 'images/slider-img-2.jpg',
        details: {
            Age: '2 months',
            Inoculations: 'none yet',
            Diseases: 'none',
            Parasites: 'dewormed',
        },
    },
    woody: {
        name: 'Woody',
        subtitle: 'Dog - Golden Retriever',
        text: 'Woody is a gentle and loyal dog who adores long walks and games with a ball. He is great with children and other pets.',
        img: 'images/slider-img-3.jpg',
        details: {
            Age: '3 years 6 months',
            Inoculations: 'distemper, parvovirus, rabies',
            Diseases: 'none',
            Parasites: 'none',
        },
    },
    sophia: {
        name: 'Sophia',
        subtitle: 'Dog - Shih Tzu',
        text: 'Sophia is a small and cheerful dog with a big personality. She likes attention, cuddles and following her people from room to room.',
        img: 'images/slider-img-4.jpg',
        details: {
            Age: '4 months',
            Inoculations: 'parvovirus',
            Diseases: 'none',
            Parasites: 'dewormed',
        },
    },
    timmy: {
        name: 'Timmy',
        subtitle: 'Cat - British Shorthair',
        text: 'Timmy is a thoughtful and independent cat. He enjoys sunny windowsills and will happily sit next to you without asking for much attention.',
        img: 'images/slider-img-5.jpg',
        details: {
            Age: '2 years 3 months',
            Inoculations: 'panleukopenia, calicivirus, rabies',
            Diseases: 'none',
            Parasites: 'none',
        },
    },
    charly: {
        name: 'Charly',
        subtitle: 'Dog - Jack Russell Terrier',
        text: 'Charly is an experienced and wise dog who has seen a lot in his life. He is calm now and looking for a quiet home with a warm bed.',
        img: 'images/slider-img-6.jpg',
        details: {
            Age: '8 years',
            Inoculations: 'distemper, parvovirus, rabies',
            Diseases: 'arthritis (managed with medication)',
            Parasites: 'none',
        },
    },
    scarlett: {
        name: 'Scarlett',
        subtitle: 'Dog - Jack Russell Terrier',
        text: 'Scarlett is a lively and brave little dog who loves to run and explore. She needs an active family that can keep up with her energy.',
        img: 'images/slider-img-7.jpg',
        details: {
            Age: '3 months',
            Inoculations: 'parvovirus, distemper',
            Diseases: 'none',
            Parasites: 'treated for fleas',
        },
    },
    freddie: {
        name: 'Freddie',
        subtitle: 'images/slider-img-8.jpg',
        text: 'Freddie is a curious kitten who is always ready to play. He chases toys, climbs everything he can reach and falls asleep in the most unexpected places.',
        img: 'images/pets/freddie.jpg',
        details: {
            Age: '5 months',
            Inoculations: 'none yet',
            Diseases: 'none',
            Parasites: 'dewormed',
        },
    },
    patrick: {
        name: 'Patrick',
        subtitle: 'Cat - Maine Coon',
        text: 'Patrick is a big and friendly cat with a soft voice. He is very sociable, likes being brushed and is always the first to greet visitors.',
        img: 'images/slider-img-9.jpg',
        details: {
            Age: '1 year 2 months',
            Inoculations: 'panleukopenia, rabies',
            Diseases: 'none',
            Parasites: 'none',
        },
    },
};

const modal = document.querySelector('#pet-modal');
const modalImg = modal.querySelector('.modal__img');
const modalTitle = modal.querySelector('.modal__title');
const modalSubtitle = modal.querySelector('.modal__subtitle');
const modalText = modal.querySelector('.modal__text');
const modalList = modal.querySelector('.modal__list');
const modalClose = modal.querySelector('.modal__close');

function fillModal(pet) {
    modalImg.src = pet.img;
    modalImg.alt = pet.name;
    modalTitle.textContent = pet.name;
    modalSubtitle.textContent = pet.subtitle;
    modalText.textContent = pet.text;

    modalList.replaceChildren();
    for (const [label, value] of Object.entries(pet.details)) {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = `${label}: `;
        li.append(strong, value);
        modalList.append(li);
    }
}

// открытие
wrapper.addEventListener('click', (e) => {
    const btn = e.target.closest('.slider__item-btn');
    if (!btn) return;

    const pet = pets[btn.closest('.slider__item').dataset.pet];
    if (!pet) return;

    fillModal(pet);
    document.body.classList.add('no-scroll');
    modal.showModal();
});

// закрытие
modalClose.addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();   // клик по затемнению
});

modal.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
});