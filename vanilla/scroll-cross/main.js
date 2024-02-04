const scrollbox = document.querySelector(".scrollbox");
const imgContainer = document.querySelector(".img-container");
const imgHeight = document.querySelector("img").height;
const imgs = document.querySelectorAll("img");

function resize() {
  let width = imgContainer.offsetWidth;

  scrollbox.style.height = width + "px";
}

function scroll() {
  const scrollBoxInView = window.scrollY > scrollbox.offsetTop;
  let moveDistance = window.scrollY - scrollbox.offsetTop;
  const scrollBoxToEnd =
    window.scrollY >= scrollbox.offsetTop + scrollbox.offsetHeight - imgHeight;

  if (scrollBoxInView && !scrollBoxToEnd) {
    imgContainer.style.transform = `translateY(${moveDistance}px)`;

    for (let img of imgs) {
      img.style.transform = `translateX(-${moveDistance}px)`;
    }
  }
}

window.addEventListener("scroll", scroll);
window.addEventListener("load", resize);
window.addEventListener("resize", resize);
