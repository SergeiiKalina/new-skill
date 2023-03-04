
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
};

const rangeFilter = document.querySelector('#sort-desc');
const label = document.querySelector('.filter__price_label')
const filterPage = document.querySelector('.filter')
const filterBlock = document.querySelector('.filter_item')
const filtBurger = document.querySelector('.filter_burger')
const filterOpen = document.querySelector('.filter__block')
const closeFilter = document.querySelector('.button__close');


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


// let priceMin = parseInt(range[0].value);
// let priceMax = parseInt(range[1].value);
// veivProduct.addEventListener('click', () => {
   
//     for(let i = 0; i < nav.children.length; i++){
//         if(maxrange > +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'block'; 
//         }
//         if(minrange > +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'none';  
//         }
      
//         if(minrange < +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'block'; 
//         }
//         if(maxrange < +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'none'; 
//         }
//        } 
//        filterOpen.classList.add('hidden')
//        filtBurger.classList.remove('activ')
//        document.body.classList.remove('lock')
// })



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


////// Filter //////////////////////////////////////////////////////////////////////////
const form = document.querySelector('form'); // береш форму
// if(!form) {
//     return;
// } // якщо форми немає, то виходимо з функції


// елемент картки продукту має містити атрибути data-price, data-category, data-color, та клас product-item
const filters = {
  priceMin: (item, value) => Number(form.priceMin.value) <= Number(item.dataset.price), // фільтр по мін ціні
  priceMax: (item, value) => Number(form.priceMax.value) >= Number(item.dataset.price), // фільтр по макс ціні
  category: (item, category) => item.dataset.category === item.dataset.category, 
//   category1: (item, category) => form.hairpins.value === item.dataset.hairpins,
//   category2: (item, category) => form.pendant.value === item.dataset.pendant,

//  color: (item, color) => form.dataset.color === color, // фільтр по кольору тощо
  
};

const products = [...document.querySelectorAll('.product_block_item')];// береш всі продукти на сторінці...

const getFilterValues = (form) => { // функція яка отримує всі значення фільтрів
  const formData = new FormData(form);
  const values = {};
for(let item of formData){
 console.log(item)
}
  for (const [key, value] of formData) {
    values[key] = value;
    
  }
  return values;
};

rangeFilter.addEventListener('click', filterProducts)
function filterProducts() { // функція фільтрації
  const values = getFilterValues(form); // береш всі значення фільтрів
  products.forEach((item) => { // проходишся по всіх продуктах
    const isFiltered = Object.entries(filters).every(([type, cb]) => cb(item, values[type]));
     // перевіряєш чи вони проходять всі фільтри
     console.log(form.category)
    item.style.display = isFiltered ? 'block' : 'none'; // якщо проходять, то показуєш, якщо ні, то ховаєш
  });
}




// rangeFilter.addEventListener('click', () => {
//     let minrange = parseInt(range[0].value),
//     maxrange = parseInt(range[1].value);
//     for(let i = 0; i < nav.children.length; i++){
//         if(maxrange > +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'block'; 
//         }
//         if(minrange > +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'none';  
//         }
      
//         if(minrange < +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'block'; 
//         }
//         if(maxrange < +nav.children[i].getAttribute('data-sort')){
//             nav.children[i].style.display = 'none'; 
//         }
//        } 
// })

const earrings = document.querySelector('.earrings_button')
const hairpins = document.querySelector('.hairpins_button')
const pendant = document.querySelector('.pendant_button')

// earrings.addEventListener('click', () =>{
//     earrings.classList.toggle('activ')
// })
// hairpins.addEventListener('click', () =>{
//     hairpins.classList.toggle('activ')
// })
// pendant.addEventListener('click', () =>{
//     pendant.classList.toggle('activ')
// })

// veivProduct.addEventListener('click', () => {

//     });
    
// rangeFilter.addEventListener('click', () => {

    
//     });

// function mySort(){
//     let nav = document.querySelector('#nav');
//     for(let i = 0; i < nav.children.length; i++){
//         for(let j = i; j < nav.children.length; j++){
//             if(+nav.children[i].getAttribute('data-sort') > +nav.children[j].getAttribute('data-sort')){
//                 replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
//                 insertAfter(replacedNode, nav.children[i]);
//             }
//         }
//     }
// }
// function myReversSort(){
//     let nav = document.querySelector('#nav');
//     for(let i = 0; i < nav.children.length; i++){
//         for(let j = i; j < nav.children.length; j++){
//             if(+nav.children[i].getAttribute('data-sort') < +nav.children[j].getAttribute('data-sort')){
//                 replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
//                 insertAfter(replacedNode, nav.children[i]);
//             }
//         }
//     }
// }

// function insertAfter(elem, refElem){
//     return refElem.parentNode.insertBefore(elem, refElem.nextSubling);
// }





// earrings.addEventListener('click', () =>{
//     let nav = document.querySelector('#nav');
//     for(let i = 0; i < nav.children.length; i++){
//         nav.children[i].style.display = 'block'
//     }
// for(let i = 0; i < nav.children.length; i++){
//     if(!nav.children[i].classList.contains('earrings')){
//         nav.children[i].style.display = 'none'
//     }
// }
// })
// hairpins.addEventListener('click', () =>{
//     let nav = document.querySelector('#nav');
//     for(let i = 0; i < nav.children.length; i++){
//         nav.children[i].style.display = 'block'
//     }
// for(let i = 0; i < nav.children.length; i++){
//     if(!nav.children[i].classList.contains('hairpins')){
//         nav.children[i].style.display = 'none'
//     }
// }
// })
// pendant.addEventListener('click', () =>{
//     let nav = document.querySelector('#nav');
//     for(let i = 0; i < nav.children.length; i++){
//         nav.children[i].style.display = 'block'
//     }
// for(let i = 0; i < nav.children.length; i++){
//     if(!nav.children[i].classList.contains('pendant')){
//         nav.children[i].style.display = 'none'
//     }
// }
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    filtBurger.addEventListener('click', () => {
        filtBurger.classList.toggle('activ')
        filterOpen.classList.toggle('hidden')
        document.body.classList.toggle('lock')
        console.log(filtBurger)
    })

    
    closeFilter.addEventListener('click', () => {
        filterOpen.classList.add('hidden')
        filtBurger.classList.remove('activ')
        document.body.classList.remove('lock')
    })