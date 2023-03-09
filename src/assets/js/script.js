
const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobike/i);
    },
    any: function(){
        return (isMobile.Android()||
        isMobile.BlackBerry()||
        isMobile.iOS()||
        isMobile.Opera()||
        isMobile.Windows());
    }
};
if(isMobile.any()){
document.body.classList.add('touch');
}else{
    document.body.classList.add('pc')
}


document.addEventListener('DOMContentLoaded', ready)
function ready(){
    for(let i = 0; i < nav.children.length; i++){
        if(nav.children[i].getAttribute('data-sale')){
            nav.children[i].children[0].children[1].style.display = 'flex'
            nav.children[i].children[0].children[1].innerHTML = `- ${nav.children[i].getAttribute('data-sale')}%`;
        }
        if(!nav.children[i].getAttribute('data-sale')){
            nav.children[i].children[0].children[1].style.display = 'none'
        }
    }
}


const burger = document.querySelector('.menu__icon')
burger.addEventListener('click', () => {
   const menu = document.querySelector('.menu__body')
   document.body.classList.toggle('lock')
   menu.classList.toggle('hidden')
   burger.classList.toggle('activ')
})
const header = document.querySelector('.header__block');
const subMenu = document.querySelector('.menu__sublist_block');
const shop = document.getElementById('shop');
const slider = document.querySelector('.swiper-wrapper');
shop.addEventListener('click', () => {
subMenu.classList.toggle('activ')
header.classList.toggle('activ')
slider.classList.toggle('activ')
shop.classList.toggle('activ')
});

const listItem = document.querySelectorAll('.target')
const menu = document.getElementById('menu')

menu.addEventListener('click', (event) => {
    let target = event.target;
    if(target.tagName != 'A') return;
    for(let elem of listItem){
        elem.classList.remove('underline')
    }
    target.classList.toggle('underline')
})

//  let a = [30,25,10,4,2,90,40]
//  console.log(a.sort((a,b) => a - b))
new Swiper('.container-slider', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight:true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }
});
