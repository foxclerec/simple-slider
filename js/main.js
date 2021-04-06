let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let images = document.querySelectorAll('img');

let i = 0;

btnPrev.onclick = function() {
    images[i].style.display = 'none';
    i--;

    if (i < 0) {
        i = images.length - 1;
    }

    images[i].style.display = 'block';
};

btnNext.onclick = function() {

    images[i].style.display = 'none';
    i++;

    if (i >= images.length) {
        i = 0;
    }

    images[i].style.display = 'block';

};