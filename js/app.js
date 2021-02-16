/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const lines = document.querySelector('.hamburger-menu');

const navBar = document.querySelector('.navbar__menu');

lines.addEventListener('click', () => {
    navBar.classList.toggle('rotate');
});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

let sec1 = document.querySelector('.link1');
let sec2 = document.querySelector('.link2');
let sec3 = document.querySelector('.link3');
let sec4 = document.querySelector('.link4');


sec1.addEventListener('click', function scrollTo1() {
    window.scrollTo(0, 440);
})
sec2.addEventListener('click', function scrollTo2() {
    window.scrollTo(0, 1020);
})
sec3.addEventListener('click', function scrollTo3() {
    window.scrollTo(0, 1540);
})
sec4.addEventListener('click', function scrollTo4() {
    window.scrollTo(0, 2240);
})
const sec = document.querySelectorAll('section');
const nevLink = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';
    sec.forEach(section => {
    const secTop = section.offsetTop;
    const secHeight = section.clientHeight;
    if(pageYOffset >= (secTop) - secHeight / 2) {
        current = section.getAttribute('id');
    }
    })
    nevLink.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


