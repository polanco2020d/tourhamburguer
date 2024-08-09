let openchopi = document.querySelector('.chopi');
let closeshopping =document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcard =document.querySelector('.listcard');
let body =document.querySelector('.body');
let total =document.querySelector('.total');
quantity =document.querySelector('.')

openchopi.addEventListener('.click',()=>{
    body.classList.add('active');
}
)
closeshopping.addEventListener('click',()=>{
    body.classList.remove('active');
})

let products=[{
    id:1,
    name:"products name 1"
    Image:' image/1.jpg',
    price:120000
}]







