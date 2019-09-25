// Smooth Scroll
// ——————————————————————————————————————————————————
let mainNavLinks = document.querySelectorAll(".nav li a");

function init() {
  doSmoothScrolling();
}

function doSmoothScrolling() {
  mainNavLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}
init();
