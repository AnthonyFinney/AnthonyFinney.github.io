const projectCarousel = document.getElementById('projectCarousel');
const prevProjectBtn = document.getElementById('prevProjectBtn');
const nextProjectBtn = document.getElementById('nextProjectBtn');
const totalProjects = projectCarousel.firstElementChild.children.length;
let currentProjectIndex = 0;

function updateProjectCarousel() {
    const offset = currentProjectIndex * -100;
    projectCarousel.firstElementChild.style.transform = `translateX(${offset}%)`;
}

prevProjectBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : totalProjects - 1;
    updateProjectCarousel();
});

nextProjectBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex < totalProjects - 1) ? currentProjectIndex + 1 : 0;
    updateProjectCarousel();
});

const accomplishmentCarousel = document.getElementById('accomplishmentCarousel');
const prevAccomplishmentBtn = document.getElementById('prevAccomplishmentBtn');
const nextAccomplishmentBtn = document.getElementById('nextAccomplishmentBtn');
const totalAccomplishments = accomplishmentCarousel.firstElementChild.children.length;
let currentAccomplishmentIndex = 0;

function updateAccomplishmentCarousel() {
    const offset = currentAccomplishmentIndex * -100;
    accomplishmentCarousel.firstElementChild.style.transform = `translateX(${offset}%)`;
}

prevAccomplishmentBtn.addEventListener('click', () => {
    currentAccomplishmentIndex = (currentAccomplishmentIndex > 0) ? currentAccomplishmentIndex - 1 : totalAccomplishments - 1;
    updateAccomplishmentCarousel();
});

nextAccomplishmentBtn.addEventListener('click', () => {
    currentAccomplishmentIndex = (currentAccomplishmentIndex < totalAccomplishments - 1) ? currentAccomplishmentIndex + 1 : 0;
    updateAccomplishmentCarousel();
});

const projectImageCarousels = document.querySelectorAll('.project-images');
const prevProjectImgButtons = document.querySelectorAll('.prevImg');
const nextProjectImgButtons = document.querySelectorAll('.nextImg');

projectImageCarousels.forEach((carousel, index) => {
    let currentImgIndex = 0;
    const totalImages = carousel.children.length;

    function updateProjectImageCarousel() {
        const offset = currentImgIndex * -100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevProjectImgButtons[index].addEventListener('click', () => {
        currentImgIndex = (currentImgIndex > 0) ? currentImgIndex - 1 : totalImages - 1;
        updateProjectImageCarousel();
    });

    nextProjectImgButtons[index].addEventListener('click', () => {
        currentImgIndex = (currentImgIndex < totalImages - 1) ? currentImgIndex + 1 : 0;
        updateProjectImageCarousel();
    });
});

const accomplishmentImageCarousels = document.querySelectorAll('.accomplishment-images');
const prevAccomplishmentImgButtons = document.querySelectorAll('.prevAccomplishmentImg');
const nextAccomplishmentImgButtons = document.querySelectorAll('.nextAccomplishmentImg');

accomplishmentImageCarousels.forEach((carousel, index) => {
    let currentImgIndex = 0;
    const totalImages = carousel.children.length;

    function updateAccomplishmentImageCarousel() {
        const offset = currentImgIndex * -100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevAccomplishmentImgButtons[index].addEventListener('click', () => {
        currentImgIndex = (currentImgIndex > 0) ? currentImgIndex - 1 : totalImages - 1;
        updateAccomplishmentImageCarousel();
    });

    nextAccomplishmentImgButtons[index].addEventListener('click', () => {
        currentImgIndex = (currentImgIndex < totalImages - 1) ? currentImgIndex + 1 : 0;
        updateAccomplishmentImageCarousel();
    });
});
