"use strict";

var headerHumburger = document.querySelector(".header__hamburger");
var modalWindow = document.forms.modal;
var userName = modalWindow.elements.userName;
var userMail = modalWindow.elements.userMail;
var userMessage = modalWindow.elements.userMessage;
var modalButton = modalWindow.querySelector(".modal__button");
var inputPlace = modalWindow.querySelectorAll(".input__place");
var modalPage = document.querySelector(".modal");
var questionBtn = document.querySelector(".question__btn");
var modal = document.querySelector(".modal");
var modalClose = document.querySelector(".modal__close");
var hamburgerMenu = document.querySelector(".hamburger__menu");
headerHumburger.addEventListener("click", function () {
  headerHumburger.classList.toggle("header__hamburger--active");
});
questionBtn.addEventListener("click", function () {
  document.body.classList.add('body-no-scroll');
  modalPage.classList.add("modal--active");
});
modal.addEventListener("click", function (e) {
  if (e.target.className.includes("modal--active")) {
    document.body.classList.remove('body-no-scroll');
    modalPage.classList.remove("modal--active");
  }
});
modalClose.addEventListener("click", function () {
  document.body.classList.remove('body-no-scroll');
  modalPage.classList.remove("modal--active");
});
headerHumburger.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger__menu--active");
});
modalWindow.addEventListener("submit", function (event) {
  event.preventDefault();
  cleanErrors();

  for (var i = 0; i < inputPlace.length; i++) {
    if (!inputPlace[i].value) {
      var error = document.createElement("div");
      error.className = "error error-style";
      inputPlace[i].classList.add("input-error");
      error.innerHTML = "Please fill out this field";
      inputPlace[i].parentElement.insertAdjacentElement("beforeend", error);
      modalWindow.classList.add("form-error");
    } else {
      modalWindow.classList.remove("form-error");
    }
  }

  var classError = [];
  inputPlace.forEach(function (item) {
    if (item.classList.contains("input-error")) {
      classError.push(item.className);
    }
  });

  if (!classError.length) {
    modalWindow.classList.remove("form-error");
  }

  if (!modalWindow.classList.contains("form-error")) {
    var sendData = {
      userName: userName.value,
      userMail: userMail.value,
      userMessage: userMessage.value
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(sendData)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      return console.log(data);
    })["catch"](function (err) {
      return console.log(err);
    });
    modalWindow.reset();
    var success = document.createElement("div");
    success.className = "success success-style";
    success.innerHTML = "Your message successfully sent";
    userMessage.parentElement.insertAdjacentElement("beforeend", success);
    setTimeout(function () {
      success.classList.remove("success-style");
      success.classList.remove("success");
      success.innerHTML = "";
    }, 3000);
  }
});

var cleanErrors = function cleanErrors() {
  var errors = modalWindow.querySelectorAll(".error");

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }

  for (var _i = 0; _i < inputPlace.length; _i++) {
    inputPlace[_i].classList.remove("input-error");
  }
};