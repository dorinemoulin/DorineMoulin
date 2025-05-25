const menuToggle = document.getElementById('hbg');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('open');
        document.body.classList.toggle('open');
    });

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const formations = document.querySelectorAll(".formation-1");
    const prevButton = document.querySelectorAll(".fleche")[0];
    const nextButton = document.querySelectorAll(".fleche")[1];
    const counter = document.getElementById("counter");

    let index = 0;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function updateCarousel() {
        if (isMobile()) {
            // Mode mobile : afficher seulement le bloc actif
            formations.forEach((formation, i) => {
                formation.classList.remove('active');
                if (i === index) {
                    formation.classList.add('active');
                }
            });
        } else {
            // Mode desktop : ton système existant
            const itemWidth = formations[0].offsetWidth + parseInt(getComputedStyle(carousel).gap || 0);
            const visibleItems = 4;
            const maxIndex = formations.length - visibleItems;
                    
            // Limiter l'index pour desktop
            if (index > maxIndex) index = maxIndex;
                    
            const offset = index * itemWidth;
            carousel.style.transform = `translateX(-${offset}px)`;
                    
            // Remettre tous les blocs visibles en desktop
            formations.forEach(formation => {
                formation.classList.remove('active');
            });
        }
                
        // Mettre à jour le compteur
        if (counter) {
            counter.textContent = index + 1;
        }
    }

    // Gestion des clics flèches (desktop)
    nextButton.addEventListener("click", () => {
        if (isMobile()) {
            if (index < formations.length - 1) {
                index++;
            }
        } else {
            const maxIndex = formations.length - 4;
            if (index < maxIndex) {
                index++;
            } else {
                index = 0; // Retour au début
            }
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (isMobile()) {
            if (index > 0) {
                index--;
            }
        } else {
            const maxIndex = formations.length - 4;
            if (index > 0) {
                index--;
            } else {
                index = maxIndex; // Aller à la fin
            }
        }
        updateCarousel();
    });

    // Gestion du touch (mobile uniquement)
    let startX = 0;
    let isDragging = false;

    carousel.addEventListener("touchstart", (e) => {
        if (!isMobile()) return;
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    carousel.addEventListener("touchmove", (e) => {
        if (!isDragging || !isMobile()) return;
        e.preventDefault();
    });

    carousel.addEventListener("touchend", (e) => {
        if (!isDragging || !isMobile()) return;
                
        const endX = e.changedTouches[0].clientX;
        const delta = startX - endX;
        isDragging = false;

        if (Math.abs(delta) > 50) {
            if (delta > 0 && index < formations.length - 1) {
                // Swipe vers la gauche = suivant
                index++;
            } else if (delta < 0 && index > 0) {
                // Swipe vers la droite = précédent
                index--;
            }
            updateCarousel();
        }
    });

    // Réajustement au redimensionnement
    window.addEventListener("resize", () => {
        // Réinitialiser si on change de mode
        if (isMobile() && index >= formations.length) {
            index = formations.length - 1;
        }
        updateCarousel();
    });

    // Initialisation
    updateCarousel();
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

