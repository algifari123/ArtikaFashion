const navbarNav = document.querySelector(".navbar-nav");
//Ketika baju menu di klik
document.querySelector("#baju-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const baju = document.querySelector("#baju-menu");

document.addEventListener("click", function (e) {
  if (!baju.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
