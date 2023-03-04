
const menu = document.getElementById('menu')
const burger = document.querySelector('.menu__icon')
const listItem = document.querySelectorAll('.target')
const header = document.querySelector('.filter__header')
const head = document.querySelector('.header__block');
const subMenu = document.querySelector('.menu__sublist_block');
const shop = document.getElementById('shop');




shop.addEventListener('click', () => {
subMenu.classList.toggle('activ')
head.classList.toggle('activ')
shop.classList.toggle('activ')
header.classList.toggle('activ')
});


menu.addEventListener('click', (event) => {
    let target = event.target;
    if(target.tagName != 'A') return;
    for(let elem of listItem){
        elem.classList.remove('underline')
    }
    target.classList.toggle('underline')
})



///////////////////////////Burger////////////
burger.addEventListener('click', () => {
    const menu = document.querySelector('.menu__body')
    document.body.classList.toggle('lock')
    menu.classList.toggle('hidden')
    burger.classList.toggle('activ')
    menu.classList.toggle('activ')
 })