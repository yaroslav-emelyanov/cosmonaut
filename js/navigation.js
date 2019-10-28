//Navigation

let points = document.querySelectorAll('.circle.default')
let btn = document.querySelector('.menu .btn')
btn.classList.add('hide')
let counter = 0
points[counter].classList.add('active')
addEventListener('wheel', scroll)

//Scroll Pages

let pages = document.querySelectorAll('.page')
pages[counter].style.display = 'block'
setTimeout(() => pages[counter].classList.add('active'))


function changePage(counter) {
    resetPages()
    activePage(counter)
}

function resetPages() {
    pages.forEach(i => {
        i.style.display = 'none'
        i.classList.remove('active')
    })
}

//Scroll Up or Down

function scroll(e) {
    e.wheelDelta > 0 ? previous() : next()
}

//Navigation with touch

let pos

addEventListener('touchstart', (e) => pos = e.changedTouches[0].clientY)

addEventListener('touchend', (e) => {
    if (Math.abs(pos - e.changedTouches[0].clientY) > 100) pos < e.changedTouches[0].clientY ? previous() : next()
})

//Directions

const mainDelay = 250

function previous() {
    let oldCounter = counter
    if (counter === 0) {
        counter = 0
    } else {
        points.forEach(p => p.classList.remove('active'))
        counter--
        points[counter].classList.add('active')
        removeEventListener('wheel', scroll)
        setTimeout(() => addEventListener('wheel', scroll), mainDelay)
        interActive(counter, oldCounter)
        changePage(counter)
    }
    hideBtn(counter)
}

function next() {
    let oldCounter = counter
    if (counter === points.length - 1) {
        counter = points.length - 1
    } else {
        points.forEach(p => p.classList.remove('active'))
        counter++
        points[counter].classList.add('active')
        removeEventListener('wheel', scroll)
        setTimeout(() => addEventListener('wheel', scroll), mainDelay)
        interActive(counter, oldCounter)
        changePage(counter)
    }
    hideBtn(counter)
}

//Btn "Hire us"

function hideBtn(c) {
    c === 0 || c === 4 ? btn.classList.add('hide') : btn.classList.remove('hide')
}

//This function use in HTML

function btnClick() {
    resetPages()
    navItems.forEach(i => i.classList.remove('active'))
    counter = 4
    hideBtn(counter)
    navItems[counter].classList.add('active')
    points.forEach(p => p.classList.remove('active'))
    points[counter].classList.add('active')
    activePage(counter)
}

//Intermediate Point Highlighting

let interPoints = document.querySelectorAll('.intermediate')

function interActive(currentCounter, previousCounter) {
    previousCounter < currentCounter && previousCounter !== currentCounter ? minusOrPlus(conditionPlus, currentCounter, 1) : minusOrPlus(conditionMinus, currentCounter, 0)
}

function minusOrPlus(func, curC, number) {
    switch (curC) {
        case number :
            func(0, 3);
            break;
        case number + 1 :
            func(3, 6);
            break;
        case number + 2 :
            func(6, 9);
            break;
        case number + 3 :
            func(9, 12);
            break;
    }
}

function conditionPlus(number1, number2) {
    let delay = 0
    for (let i = number1; i < number2; i++) {
        setTimeout(() => interPoints[i].classList.add('active'), delay)
        delay += mainDelay / 3
        setTimeout(() => interPoints[i].classList.remove('active'), delay)
    }
}

function conditionMinus(number1, number2) {
    let delay = 0
    for (let i = number2 - 1; i >= number1; i--) {
        setTimeout(() => interPoints[i].classList.add('active'), delay)
        delay += mainDelay / 3
        setTimeout(() => interPoints[i].classList.remove('active'), delay)
    }
}


//Burger menu

const burger = document.querySelector('.burger')
const esc = document.querySelector('.backstage .burger')
const main = document.querySelector('.main')
burger.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'))
    navItems[counter].classList.add('active')

    main.classList.add('active')
    removeEventListener('wheel', scroll)
})

esc.addEventListener('click', () => {
    main.classList.remove('active')
    addEventListener('wheel', scroll)
})


//Navigation with menu

let navItems = document.querySelectorAll('.nav__item')
navItems.forEach((i, index) => {
    i.addEventListener('click', () => {
        resetPages()
        navItems.forEach(i => i.classList.remove('active'))
        i.classList.add('active')
        counter = index
        hideBtn(counter)
        points.forEach(p => p.classList.remove('active'))
        points[counter].classList.add('active')
        activePage(counter)
    })
})


function activePage(c) {
    switch (c) {
        case 0:
            pages[0].style.display = 'block'
            setTimeout(() => pages[0].classList.add('active'))
            break
        case 1:
            pages[1].style.display = 'block'
            setTimeout(() => pages[1].classList.add('active'))
            break
        case 2:
            pages[2].style.display = 'block'
            setTimeout(() => pages[2].classList.add('active'))
            break
        case 3:
            pages[3].style.display = 'block'
            setTimeout(() => pages[3].classList.add('active'))
            break
        case 4:
            pages[4].style.display = 'block'
            setTimeout(() => pages[4].classList.add('active'))
            break
    }
}
