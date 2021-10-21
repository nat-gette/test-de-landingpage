
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

let modalWindow = document.forms.modal;
let userName = modalWindow.elements.userName;
let userMail = modalWindow.elements.userMail;
let userMessage = modalWindow.elements.userMessage;
let modalButton = modalWindow.querySelector('.modal__button');

// modalWindow.addEventListener('submit', function (event) {
//     event.preventDefault()
//     console.log('clicked');
//     console.log( 'userName: ', userName.value);
//     console.log( 'userMale: ', userMail.value);
//     console.log( 'userMessage: ', userMessage.value);

// })

let inputPlace = modalWindow.querySelectorAll('.input__place');

// modalWindow.addEventListener('submit', function (event) {
//     event.preventDefault()

//     for (let i = 0; i < inputPlace.length; i++) {
//         if (!inputPlace[i].value) {
//             console.log('do not have any value ', inputPlace[i]);
//             let error = document.createElement('div');
//             error.className= 'error';
//             error.style.color = 'red';
//             error.innerHTML = 'Please fill out this field';
//             inputPlace[i].parentElement.insertAdjacentElement('afterbegin', error) ;
//         }
//     }
// })

modalWindow.addEventListener('submit', function (event) {
    event.preventDefault();

    cleanErrors();

    for (let i = 0; i < inputPlace.length; i++) {
        if (!inputPlace[i].value) {
            // console.log('do not have any value ', inputPlace[i]);
            let error = document.createElement('div');
            error.className= 'error error-style';
            inputPlace[i].classList.add('input-error');
            error.innerHTML = 'Please fill out this field';
            inputPlace[i].parentElement.insertAdjacentElement('beforeend', error) ;
            modalWindow.classList.add('form-error');
        }
    }

    // modalWindow.reset();
})

let cleanErrors = function () {
    let errors = modalWindow.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
}

