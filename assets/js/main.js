
let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('header');
let navBar = document.querySelector('nav');
let scrollUp = document.querySelector('.scroll-up');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');


/*=============== SHOW MENU ===============*/
hamburger.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
});

/*========= Remove Menu on Link Click =========*/
let navRemove = () => {
    navBar.classList.remove('nav-active');
}
navLinks.forEach(link =>  {
    link.addEventListener('click', navRemove);
});


window.onscroll = () => {
    /*=============== SHOW Header Shadow ===============*/
    header.classList.toggle('head-shadow', window.scrollY > 100);
    /*=============== SHOW SCROLL UP ===============*/
    scrollUp.classList.toggle('scroll-up-show', window.scrollY > 500);


    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    sections.forEach(sec => {
        let top = window.scrollY; 
        let Offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= Offset && top < Offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('anchor-active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('anchor-active');
            });
        }
    });
}
