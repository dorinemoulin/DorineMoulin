const hbg = document.getElementById('hbg');
    const menu = document.querySelector('.menu');

    hbg.addEventListener('click', () => {
        document.body.classList.toggle('open');
    });


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const formations = document.querySelectorAll(".formation-1");
    const prevButton = document.querySelectorAll(".fleche")[0];
    const nextButton = document.querySelectorAll(".fleche")[1];

    let index = 0;
    const total = formations.length;
    const visibleItems = 4; 
    const gap = 90; 
    const itemWidth = formations[0].offsetWidth + gap;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        index = (index + 1) % (total - visibleItems + 1);
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        index = (index - 1 + (total - visibleItems + 1)) % (total - visibleItems + 1);
        updateCarousel();
    });

    updateCarousel(); // Initialiser l'affichage
});



// MENU PORTFOLIO

document.addEventListener("DOMContentLoaded", () => {
    let divGraphisme = document.getElementById("theme-1");
    let divDessin = document.getElementById("theme-2");
    let divEntreprise = document.getElementById("theme-3");
    let divPhotographie = document.getElementById("theme-4");

    let buttonGraphisme = document.getElementById("menu-1");
    let buttonDessin = document.getElementById("menu-2");
    let buttonEntreprise = document.getElementById("menu-3");
    let buttonPhotographie = document.getElementById("menu-4");

    buttonGraphisme.addEventListener("click", () => {
        divGraphisme.style.display = 'block';
        divDessin.style.display = 'none';
        divEntreprise.style.display = 'none';
        divPhotographie.style.display = 'none';
    });

    buttonDessin.addEventListener("click", () => {
        divGraphisme.style.display = 'none';
        divDessin.style.display = 'block';
        divEntreprise.style.display = 'none';
        divPhotographie.style.display = 'none';
    });

    buttonEntreprise.addEventListener("click", () => {
        divGraphisme.style.display = 'none';
        divDessin.style.display = 'none';
        divEntreprise.style.display = 'block';
        divPhotographie.style.display = 'none';
    });

    buttonPhotographie.addEventListener("click", () => {
        divGraphisme.style.display = 'none';
        divDessin.style.display = 'none';
        divEntreprise.style.display = 'none';
        divPhotographie.style.display = 'block';
    });
});


// CARROUEL PORTFOLIO

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".fond-clair");

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector(".carousel-ptf");
        const images = imagesContainer.querySelectorAll("img");
        const prevButton = carousel.querySelector(".fleche:first-of-type");
        const nextButton = carousel.querySelector(".fleche:last-of-type");

        let index = 0;

        function updateCarousel() {
            const translateValue = -index * 100 + "%";
            imagesContainer.style.transform = `translateX(${translateValue})`;
        }

        nextButton.addEventListener("click", () => {
            index = (index + 1) % images.length;
            updateCarousel();
        });

        prevButton.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            updateCarousel();
        });
    });
});

