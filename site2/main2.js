const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function burgerMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.menu-btn');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
    })
}
burgerMenu();