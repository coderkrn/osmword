var typed = new Typed('.typing', {
    strings: ["Page - 1"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });

    let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    if (scrollY > 20) {
        navbar.classList.add('red');
    } else {
        navbar.classList.remove('red');
    }
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
burger.addEventListener('click', ()=>{
  menu.classList.toggle('v-class');
});



let home = document.querySelector('.home');
home.addEventListener('click', ()=>{
  location.href = 'index.html';
});