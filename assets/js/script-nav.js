// function sliders(_classes){
    
// const header = document.querySelector('header'),
//       hbg = document.querySelector('#hbg'),
//       as = header.querySelectorAll('nav > a:not(:last-child)');

// hbg.addEventListener('click', function(e) {
//     header.classList.toggle('open');
// });

// function addEvents(_elems, _cb, _type = "click") {
//     document.querySelectorAll(_elems).forEach(el => {
//         el.addEventListener(_type, e => {
//             _cb(e);
//         });
//     });
// }

// addEvents('.nofollow', e => {
//     e.currentTarget.href = e.currentTarget.dataset.path;
// });

// }

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const hbg = document.querySelector('#hbg');

    hbg.addEventListener('click', function (e) {
        e.preventDefault();
        header.classList.toggle('open');
    });

    hbg.addEventListener('touchstart', function (e) {
        e.preventDefault(); 
        header.classList.toggle('open');
    });
});