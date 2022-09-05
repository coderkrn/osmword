var typed = new Typed('.typing', {
    strings: ["osmWorld"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed('.typing-2', {
    strings: ["KARAN PAL"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
burger.addEventListener('click', ()=>{
  menu.classList.toggle('v-class');
});


let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    if (scrollY > 20) {
        navbar.classList.add('red');
    } else {
        navbar.classList.remove('red');
    }
});

let heading = document.querySelector('.typing-2');
window.addEventListener('scroll', ()=>{
    if (scrollY > 30) {
        heading.classList.add('show');
    } else {
        heading.classList.remove('show');
    }
});




// let logo = document.querySelector('.logo');
// logo.addEventListener('click', () =>{
//     location.href = "https://www.instagram.com/palkaran03/";
// });