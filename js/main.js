// const menuBtn = document.querySelector('.burger-menu');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });

function burgerMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger-menu');
    const menuIsOpened = document.querySelector('body');``
    const nl = document.querySelector('.navbar__links');
    // const separation= document.querySelector('.little-separation');
    let menuOpen= false;
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
        if(!menuOpen) {
            if(navbar.classList.contains('light-mode')) {
                navbar.classList.add('dark-mode');
                navbar.classList.remove('light-mode');
            } else {
                navbar.classList.remove('dark-mode');
                navbar.classList.add('light-mode');
            }
            menuIsOpened.classList.add('menu-open');
            burger.classList.add('open');
            menuOpen = true;
        } else {
            if(navbar.classList.contains('dark-mode')) {
                navbar.classList.remove('dark-mode');
                navbar.classList.add('light-mode');
            } else {
                navbar.classList.add('dark-mode');
                navbar.classList.remove('light-mode');
            }
            menuIsOpened.classList.remove('menu-open');
            burger.classList.remove('open');
            menuOpen = false;
        }
    })
    nl.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
        if(menuOpen) {
            if(navbar.classList.contains('dark-mode')) {
                navbar.classList.remove('dark-mode');
                navbar.classList.add('light-mode');
            } else {
                navbar.classList.add('dark-mode');
                navbar.classList.remove('light-mode');
            }
            menuIsOpened.classList.remove('menu-open');
            burger.classList.remove('open');
            menuOpen = false;
        }
    })
}
burgerMenu();



function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}