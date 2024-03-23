const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0; 
const size = carouselImages[0].clientWidth;  

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;  
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--; 
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Indicators
const indicatorContainer = document.querySelector('.carousel-indicators');

carouselImages.forEach((image, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('active');
    }
    indicatorContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-indicators .dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        counter = index;
        updateCarousel();
    })
})

function updateCarousel() {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Automatic Transitions
let autoSlideInterval; 

function startAutoSlide(){
    autoSlideInterval = setInterval(() => {
        counter++;
        if (counter >= carouselImages.length) counter = 0;
        updateCarousel();
    }, 3000); // Adjust interval (in milliseconds) as needed
}

startAutoSlide(); 

