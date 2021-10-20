
let headerHumburger = document.querySelector('.header__hamburger');

headerHumburger.addEventListener('click', () => {
    headerHumburger.classList.toggle("header__hamburger--active");
})

let modalPage = document.querySelector('.modal');
let questionBtn = document.querySelector('.question__btn')

questionBtn.addEventListener('click', () => {
    modalPage.classList.add("modal--active");
})

let modal = document.querySelector('.modal');
 
modal.addEventListener('click', (e)  => {
    if (e.target.className.includes('modal--active')) {
        modalPage.classList.remove('modal--active');
    }
})

let modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    modalPage.classList.remove('modal--active');
})

let hamburgerMenu = document.querySelector('.hamburger__menu');

headerHumburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("hamburger__menu--active");
})

// const userEmail = document.getElementById("userMail");

// userEmail.addEventListener("input", function (event) {
//   if (userEmail.validity.typeMismatch) {
//     userEmail.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     userEmail.setCustomValidity("");
//   }
// });
