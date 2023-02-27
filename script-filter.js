
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
const burger = document.querySelector('.menu__icon')
burger.addEventListener('click', () => {
   const menu = document.querySelector('.menu__body')
   document.body.classList.toggle('lock')
   menu.classList.toggle('hidden')
   burger.classList.toggle('activ')
   menu.classList.toggle('activ')
})
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

const label = document.querySelector('.filter__price_label')
label.addEventListener('click', () => {
    label.classList.toggle('activ')
});
const labelOne = document.querySelector('.filter__price_label1')
labelOne.addEventListener('click', () => {
    labelOne.classList.toggle('activ')
});
const select = document.querySelectorAll('.filter__select')
for(let item of select){
    item.onclick = function(){
      item.classList.toggle('activ')  
    } 
}
const range = document.querySelectorAll('.range-slider input');
progress = document.querySelector('.range-slider .progress');
let gap = 10;
const inputValue = document.querySelectorAll('.numberVal input');
const veivProduct = document.querySelector('.button__done')
range.forEach(input => {
    input.addEventListener('input', e =>{
        let minrange = parseInt(range[0].value),
        maxrange = parseInt(range[1].value);
        let nav = document.querySelector('#nav');
        if(maxrange - minrange < gap){
           if(e.target.className === "range-min") {
            range[0].value = maxrange - gap;
           }
           else{
            range[1].value = minrange + gap;
           }
        }else{
            progress.style.left = (minrange / range[0].max) * 100 + '%';
            progress.style.right = 100 - (maxrange / range[1].max) * 100 + '%';
            inputValue[0].value = minrange;
            inputValue[1].value = maxrange;
            
       }
    })
});
veivProduct.addEventListener('click', () => {
    let minrange = parseInt(range[0].value),
    maxrange = parseInt(range[1].value);
    for(let i = 0; i < nav.children.length; i++){
        if(maxrange > +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'block'; 
        }
        if(minrange > +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'none';  
        }
      
        if(minrange < +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'block'; 
        }
        if(maxrange < +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'none'; 
        }
       } 
       filterOpen.classList.add('hidden')
       filtBurger.classList.remove('activ')
       document.body.classList.remove('lock')
})
shopBy.addEventListener('change', (e) => {
    let target = e.target;
    console.log(target.value)
if(target.value === 2){
    mySort()
}
if(target.value === 1){
    myReversSort()
}
})



////////////////////////////////////////////////

const filteItem = document.querySelectorAll('.product_block_item')
const focusItem = document.querySelectorAll('.proudct__focus')
for(let item of filteItem){
    item.addEventListener('click',() => {
        for(let elem of focusItem){
            elem.classList.remove('activ')
        }
        item.children[0].children[2].classList.add('activ')
      
    })
}


const rangeFilter = document.querySelector('#sort-desc');
rangeFilter.addEventListener('click', () => {
    let minrange = parseInt(range[0].value),
    maxrange = parseInt(range[1].value);
    for(let i = 0; i < nav.children.length; i++){
        if(maxrange > +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'block'; 
        }
        if(minrange > +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'none';  
        }
      
        if(minrange < +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'block'; 
        }
        if(maxrange < +nav.children[i].getAttribute('data-sort')){
            nav.children[i].style.display = 'none'; 
        }
       } 
})
function mySort(){
    let nav = document.querySelector('#nav');
    for(let i = 0; i < nav.children.length; i++){
        for(let j = i; j < nav.children.length; j++){
            if(+nav.children[i].getAttribute('data-sort') > +nav.children[j].getAttribute('data-sort')){
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}
function myReversSort(){
    let nav = document.querySelector('#nav');
    for(let i = 0; i < nav.children.length; i++){
        for(let j = i; j < nav.children.length; j++){
            if(+nav.children[i].getAttribute('data-sort') < +nav.children[j].getAttribute('data-sort')){
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSubling);
}
const filterPage = document.querySelector('.filter')
const filterBlock = document.querySelector('.filter_item')
// shop.addEventListener('click', () => {
//     filterPage.classList.toggle('activ')
//     filterBlock.classList.toggle('activ')
//     });

    const filtBurger = document.querySelector('.filter_burger')
    const filterOpen = document.querySelector('.filter__block')
    filtBurger.addEventListener('click', () => {
        filtBurger.classList.toggle('activ')
        filterOpen.classList.toggle('hidden')
        document.body.classList.toggle('lock')
        console.log(filtBurger)
    })
    const closeFilter = document.querySelector('.button__close')
    closeFilter.addEventListener('click', () => {
        filterOpen.classList.add('hidden')
        filtBurger.classList.remove('activ')
        document.body.classList.remove('lock')
    })