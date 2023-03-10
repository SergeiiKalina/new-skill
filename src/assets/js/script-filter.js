
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


veivProduct.addEventListener('click', () => {
       filterOpen.classList.add('hidden')
       filtBurger.classList.remove('activ')
       document.body.classList.remove('lock')
});




////////////////////////////////////////////////

const filteItem = document.querySelectorAll('.product_block_item')
const focusItem = document.querySelectorAll('.proudct__focus')
for(let item of filteItem){
    item.addEventListener('click',() => {
        for(let elem of focusItem){
            elem.classList.remove('activ')
        }
        item.children[0].children[3].classList.add('activ')
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
const form = document.querySelector('form'); // ?????????? ??????????
// if(!form) {
//     return;
// } // ???????? ?????????? ??????????, ???? ???????????????? ?? ??????????????
veivProduct.addEventListener('click',(e) => {
    e.preventDefault()
     filterProducts()

})
rangeFilter.addEventListener('click', filterProducts)

// ?????????????? ???????????? ???????????????? ?????? ?????????????? ???????????????? data-price, data-category, data-color, ???? ???????? product-item
const filters = {
  priceMin: (item, value) => Number(form.priceMin.value) <= Number(item.dataset.price), // ???????????? ???? ?????? ????????
  priceMax: (item, value) => Number(form.priceMax.value) >= Number(item.dataset.price), // ???????????? ???? ???????? ????????
  category: (item, category) => item.dataset.category === category,
 brands: (item, brands) => item.dataset.brands === brands, // ???????????? ???? ?????????????? ????????
};
const products = [...document.querySelectorAll('.product_block_item')];// ?????????? ?????? ???????????????? ???? ????????????????...
const getFilterValues = (form) => { // ?????????????? ?????? ?????????????? ?????? ???????????????? ????????????????
  const formData = new FormData(form);
  const values = {};

  for (const [key, value] of formData) {
    values[key] = value;  
  }
  return values;
};
function filterProducts() { // ?????????????? ????????????????????
  const values = getFilterValues(form); // ?????????? ?????? ???????????????? ????????????????
  products.forEach((item) => { // ???????????????????? ???? ???????? ??????????????????
    const isFiltered = Object.entries(filters)
    .filter(([type]) => values[type])
    .every(([type, cb]) => cb(item, values[type])); 
   // ???????????????????? ???? ???????? ?????????????????? ?????? ??????????????
    item.style.display = isFiltered ? 'block' : 'none'; 
      // ???????? ??????????????????, ???? ????????????????, ???????? ????, ???? ????????????
  });
}

label.addEventListener('click', () =>{
    console.log('Sort')
mySort();
})


labelOne.addEventListener('click', () =>{
    console.log('revers')
    myReversSort();
})
function mySort(){
    let nav = document.querySelector('#nav');
    for(let i = 0; i < nav.children.length; i++){
        for(let j = i; j < nav.children.length; j++){
            if(+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')){
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
            if(+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')){
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSubling);
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filterHidden = document.querySelector('.filter__block');
const filterItem = document.querySelector('.filter_item');
    filtBurger.addEventListener('click', () => {
        filtBurger.classList.toggle('activ')
        filterOpen.classList.toggle('hidden')
        document.body.classList.toggle('lock')
        filterHidden.classList.add('lock')
        filterItem.classList.add('lock')
        console.log(filtBurger)
    });

    
    closeFilter.addEventListener('click', () => {
        filterOpen.classList.add('hidden')
        filtBurger.classList.remove('activ')
        document.body.classList.remove('lock')
        filterHidden.classList.remove('lock')
        filterItem.classList.remove('lock')
    })
   
    const ViewAll = document.querySelector('.button__veiv_all')
    ViewAll.addEventListener('click', (e) => {
        e.preventDefault()
        for(let item of filteItem){
            item.style.display = 'block'
        }
        filterOpen.classList.add('hidden')
        filtBurger.classList.remove('activ')
        document.body.classList.remove('lock')
    })

const search = document.querySelector('.filter__head_search a');
    search.addEventListener('click', (e) => {
        e.preventDefault()
let val = document.querySelector('.filter__head_search input').value;
console.log(val)
let arr = [];
let search = document.querySelectorAll('.product_block_item_name');
for(let i = 0; i < search.length; i++){
arr.push(search[i])
let result = arr.filter(arr => console.log([arr]) )
console.log(arr[i].innerText)
console.log('-------------------------')
}
    })