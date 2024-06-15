document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-item');
        let slideIndex = 0;
 
        const showSlides = () => {
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            const offset = -slideIndex * 100;
            slides.forEach(slide => {
                slide.style.transform = `translateX(${offset}%)`;
            });
        };
 
        const changeSlide = (n) => {
            slideIndex += n;
            showSlides();
            resetInterval();
        };

 
        showSlides();
 
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
 
        prevButton.addEventListener('click', () => {
            changeSlide(-1);
        });
 
        nextButton.addEventListener('click', () => {
            changeSlide(1);
        });
    });
});