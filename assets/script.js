// show menu hidden 

// grab necessary elements and set it as a variable 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// === menus show 
// when we click on toggle, add show-menu class 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// === menu hidden 
// when we click on close logo, show-menu class is removed 
if(navClose){
    navClose.addEventListener('click' , () => 
        navMenu.classList.remove('show-menu')
    )
}
// === remove menu mobile 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// skills 