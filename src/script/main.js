let headerHumburger = document.querySelector(".header__hamburger");
let modalWindow = document.forms.modal;
let userName = modalWindow.elements.userName;
let userMail = modalWindow.elements.userMail;
let userMessage = modalWindow.elements.userMessage;
let modalButton = modalWindow.querySelector(".modal__button");
let inputPlace = modalWindow.querySelectorAll(".input__place");
let modalPage = document.querySelector(".modal");
let questionBtn = document.querySelector(".question__btn");
let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".modal__close");
let hamburgerMenu = document.querySelector(".hamburger__menu");

headerHumburger.addEventListener("click", () => {
    headerHumburger.classList.toggle("header__hamburger--active");
});

questionBtn.addEventListener("click", () => {
    document.body.classList.add('body-no-scroll');
    modalPage.classList.add("modal--active");
});

modal.addEventListener("click", (e) => {
    if (e.target.className.includes("modal--active")) {
        document.body.classList.remove('body-no-scroll');
        modalPage.classList.remove("modal--active");
    }
});

modalClose.addEventListener("click", () => {
    document.body.classList.remove('body-no-scroll');
    modalPage.classList.remove("modal--active");
});

headerHumburger.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hamburger__menu--active");
});

modalWindow.addEventListener("submit", function (event) {
    event.preventDefault();

    cleanErrors();

    for (let i = 0; i < inputPlace.length; i++) {
        if (!inputPlace[i].value) {
            let error = document.createElement("div");

            error.className = "error error-style";
            inputPlace[i].classList.add("input-error");
            error.innerHTML = "Please fill out this field";
            inputPlace[i].parentElement.insertAdjacentElement("beforeend", error);
            modalWindow.classList.add("form-error");
        } else {
            modalWindow.classList.remove("form-error");
        }
    }

    let classError = [];

    inputPlace.forEach((item) => {
        if (item.classList.contains("input-error")) {
            classError.push(item.className);
        }
    });

    if (!classError.length) {
        modalWindow.classList.remove("form-error");
    }

    if (!modalWindow.classList.contains("form-error")) {
        const sendData = {
            userName: userName.value,
            userMail: userMail.value,
            userMessage: userMessage.value,
        };

        fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(sendData)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        modalWindow.reset();

        let success = document.createElement("div");
        success.className = "success success-style";
        success.innerHTML = "Your message successfully sent";
        userMessage.parentElement.insertAdjacentElement("beforeend", success);

        setTimeout(() => {
            success.classList.remove("success-style");
            success.classList.remove("success");
            success.innerHTML = "";
        }, 3000);
    }
});

let cleanErrors = function () {
    let errors = modalWindow.querySelectorAll(".error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
    
    for (let i = 0; i < inputPlace.length; i++) {
        inputPlace[i].classList.remove("input-error");
    }
};

