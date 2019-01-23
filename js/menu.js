var link = document.querySelector(".main-nav__toggle");
var oupenmenu = document.querySelector(".header-nav__wrapper");
var closemenu = document.querySelector(".main-nav__close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  oupenmenu.classList.add("menu-show");
});

closemenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  oupenmenu.classList.remove("menu-show");
});