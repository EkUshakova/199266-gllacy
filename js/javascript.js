var link = document.querySelector(".map-contact-button");

var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".feedback-button-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var text = popup.querySelector("[class=feedback-text]");

var storage = localStorage.getItem("name");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
      login.focus();
    }

  });

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.add("modal-error");
});


form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Заполните поля формы");
  } else {
      localStorage.setItem("name", name.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.add("modal-error");
      }
    }
  });
