document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container-portrait');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-portrait');
        let slideIndex = 0;

        const showSlides = () => {
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            const offset = -slideIndex * 100; // 100% pour une seule image à la fois
            slides.forEach(slide => {
                slide.style.transform = `translateX(${offset}%)`;
            });
        };

        const changeSlide = (n) => {
            slideIndex += n;
            showSlides();
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