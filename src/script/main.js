// $('.slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

  
// // let mainMenu = document.querySelector('.');
// let mainHamburger = document.querySelector('.header__hamburger');

// mainHamburger.addEventListener('click', () => {
//     mainMenu.classList.toggle("header__list--active");
// })

// let menuLinks = document.querySelectorAll('.header__link');
// for (let menuLink of menuLinks){
//       menuLink.addEventListener('click', (e) => {
//           e.preventDefault();
//           let scrollToElem = menuLink.getAttribute('href');
//           let coordinates = document.querySelector(scrollToElem).offsetTop;
//           window.scrollTo({
//               top:coordinates -150,
//               behavior: 'smooth'
//           })
//       })
// }

let headerHunburger = document.querySelector('.header__hamburger');

headerHunburger.addEventListener('click', () => {
    headerHunburger.classList.toggle("header__hamburger--active");
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



