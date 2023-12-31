/*
 * 0.5 0.75 1 0.75 0.5
 *   0.1 0.1 0.1 0.1
 */
const wrapper = document.querySelector(".scroller-wrapper");
const initImages = document.querySelectorAll("img");
let images = document.querySelectorAll("img");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".right-arrow");
const preBtn = document.querySelector(".left-arrow");

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

const siblingSiblingZIndex = 10;
const siblingZIndex = 25;
const midZIndex = 50;
const hideZIndex = 0;

const total = 8;

let imageIndex = 2;
let dotIndex = 2;

function dotsAddEvent() {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activeDots(index);
    });
  });
}

function btnAddEvent() {
  nextBtn.addEventListener("click", () => {
    activeDots(++dotIndex % total);
  });
  preBtn.addEventListener("click", () => {
    if (dotIndex - 1 === -1) {
      dotIndex = total - 1;
    } else {
      dotIndex = dotIndex - 1;
    }
    activeDots(dotIndex);
  });
}

function activeDots(targetIndex) {
  dots.forEach((dot, index) => {
    if (index === targetIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
  dotIndex = targetIndex;
  imageIndex = searchImageIndex(targetIndex);
  update();
}

function searchImageIndex(targetIndex) {
  let targetElement = initImages[targetIndex];
  return [...images].indexOf(targetElement)
}

function init() {
  update();
}

function update() {
  adjustImages();
  const mid = images[imageIndex];
  let pre = images[imageIndex - 1];
  let prePre = images[imageIndex - 2];
  let next = images[imageIndex + 1];
  let nextNext = images[imageIndex + 2];

  prePre.style.transform = `translate3d(${prePreX}px,0,0) scale(${siblingSiblingScale})`;
  prePre.style.opacity = 1;
  prePre.style.zIndex = siblingSiblingZIndex;
  pre.style.transform = `translate3d(${preX}px,0,0) scale(${siblingScale})`;
  pre.style.opacity = 1;
  pre.style.zIndex = siblingZIndex;

  mid.style.transform = `translate3d(${midX}px,0,0) scale(${midScale})`;
  mid.style.opacity = 1;
  mid.style.zIndex = midZIndex;

  next.style.transform = `translate3d(${nextX}px,0,0) scale(${siblingScale})`;
  next.style.opacity = 1;
  next.style.zIndex = siblingZIndex;

  nextNext.style.transform = `translate3d(${nextNextX}px,0,0) scale(${siblingSiblingScale})`;
  nextNext.style.opacity = 1;
  nextNext.style.zIndex = siblingSiblingZIndex;

  for (let i = 0; i < imageIndex - 2; i++) {
    images[i].style.transform = `translate3d(${hideFrontX}px,0,0) scale(0)`;
    images[i].style.opacity = 0;
    images[i].style.zIndex = hideZIndex;
  }

  for (let i = imageIndex + 2 + 1; i < images.length; i++) {
    images[i].style.transform = `translate3d(${hideAfterX}px,0,0) scale(0)`;
    images[i].style.opacity = 0;
    images[i].style.zIndex = hideZIndex;
  }
}

function adjustImages() {
  if (!images[imageIndex - 1] && !images[imageIndex - 2]) {
    unshiftImage();
    unshiftImage();
  }
  if (!images[imageIndex - 1] || !images[imageIndex - 2]) {
    unshiftImage();
  }
  if (!images[imageIndex + 1] && !images[imageIndex + 2]) {
    pushImage();
    pushImage();
  }
  if (!images[imageIndex + 1] || !images[imageIndex + 2]) {
    pushImage();
  }
}

function pushImage() {
  const img = images[0];
  wrapper.appendChild(img);
  // 主动要求浏览器计算img的transform属性，以此实现首部img移动到尾部的位移过渡效果
  window.getComputedStyle(img).transform;
  updateImages();
  imageIndex--;
}

function unshiftImage() {
  const img = images[images.length - 1];
  wrapper.insertBefore(img, wrapper.firstChild);
  window.getComputedStyle(img);
  updateImages();
  imageIndex++;
}

function updateImages() {
  images = document.querySelectorAll("img");
}

init();
dotsAddEvent();
btnAddEvent();
