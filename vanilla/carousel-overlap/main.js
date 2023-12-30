/*
 * 0.5 0.75 1 0.75 0.5
 *   0.1 0.1 0.1 0.1
 */
const images = document.querySelectorAll("img");
const dots = document.querySelectorAll(".dot");

const wrapperWidth = 1240;
const imgWidth = wrapperWidth / 3.1;
const overlapGap = imgWidth * 0.1;
const midScale = 1;
const siblingScale = midScale * 0.75;
const siblingSiblingScale = midScale * 0.5;

const prePreX = 0;
const preX = prePreX + imgWidth * siblingSiblingScale - overlapGap;
const midX = preX + imgWidth * siblingScale - overlapGap;
const nextX = midX + imgWidth * midScale - overlapGap;
const nextNextX = nextX + imgWidth * siblingScale - overlapGap;

const hideFrontX = -200;
const hideAfterX = wrapperWidth - 400;

const siblingSiblingZ = 0;
const siblingZ = 25;
const midZ = 50;
const hideZ = 0;

function dotsAddEvent() {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dot.classList.add("active");
      dots.forEach((dot, _index) => {
        if (_index !== index) {
          dot.classList.remove("active");
        }
      });
      switchImage(index);
    });
  });
}

function switchImage(index) {
  images.forEach((image, _index) => {
    if (_index === index) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
  update();
}

function init() {
  update();
}

function update() {
  let activeImage = document.querySelector("img.active");

  const midIndex = [...images].indexOf(activeImage);
  const mid = images[midIndex];
  const pre = images[midIndex - 1];
  const prePre = images[midIndex - 2];
  const next = images[midIndex + 1];
  const nextNext = images[midIndex + 2];

  prePre.style.transform = `translate3d(${prePreX}px,0,${siblingSiblingZ}px) scale(${siblingSiblingScale})`;
  prePre.style.opacity = 1;
  pre.style.transform = `translate3d(${preX}px,0,${siblingZ}px) scale(${siblingScale})`;
  pre.style.opacity = 1;

  mid.style.transform = `translate3d(${midX}px,0,${midZ}px) scale(${midScale})`;
  mid.style.opacity = 1;

  next.style.transform = `translate3d(${nextX}px,0,${siblingZ}px) scale(${siblingScale})`;
  next.style.opacity = 1;

  nextNext.style.transform = `translate3d(${nextNextX}px,0,${siblingSiblingZ}px) scale(${siblingSiblingScale})`;
  nextNext.style.opacity = 1;

  for (let i = 0; i < midIndex - 2; i++) {
    images[
      i
    ].style.transform = `translate3d(${hideFrontX}px,0,${hideZ}px) scale(0)`;
    images[i].style.opacity = 0;
  }

  for (let i = midIndex + 2 + 1; i < images.length; i++) {
    images[
      i
    ].style.transform = `translate3d(${hideAfterX}px,0,${hideZ}px) scale(0)`;
    images[i].style.opacity = 0;
  }
}

init();
dotsAddEvent();
