document.addEventListener("DOMContentLoaded", () => {
    let divGraphisme = document.getElementById("graphisme");
    let divDessin = document.getElementById("dessin-portfolio");
    let divEntreprise = document.getElementById("entreprise");
    let divPhotographie = document.getElementById("photographie-portfolio");

    let buttonGraphisme = document.getElementById("btn-graphisme");
    let buttonDessin = document.getElementById("btn-dessin");
    let buttonEntreprise = document.getElementById("btn-entreprise");
    let buttonPhotographie = document.getElementById("btn-photographie-portfolio");

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