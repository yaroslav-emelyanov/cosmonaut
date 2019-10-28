//Slider

let slider = document.querySelector('.slider')
const arrowLeft = document.querySelector('.arrow.left')
const arrowRight = document.querySelector('.arrow.right')
const img = document.querySelectorAll('.slider__item img')
const des = document.querySelectorAll('.slider__item .description')


arrowRight.addEventListener('click', right)
arrowLeft.addEventListener('click', left)

function left() {
    [img[0].src, img[1].src, img[2].src] = [img[2].src, img[0].src, img[1].src];
    [des[0].innerHTML, des[1].innerHTML, des[2].innerHTML] = [des[2].innerHTML, des[0].innerHTML, des[1].innerHTML];
}

function right() {
    [img[0].src, img[1].src, img[2].src] = [img[2].src, img[0].src, img[1].src];
    [des[0].innerHTML, des[1].innerHTML, des[2].innerHTML] = [des[2].innerHTML, des[0].innerHTML, des[1].innerHTML];
}





