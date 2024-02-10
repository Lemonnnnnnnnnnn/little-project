const scrollbox = document.querySelector(".scrollbox");
const container = document.querySelector(".container");
const containerHeight = document.querySelector(".container").offsetHeight;
const innerBoxs = document.querySelectorAll(".innerbox");
const innerBox = innerBoxs[0];
const gap = 48;
const margin = 48;

function resize() {
  scrollbox.style.height = container.offsetWidth + "px";
}

function scroll() {
  // scrollBox 是否完全进入视野
  const scrollBoxInView = window.scrollY > scrollbox.offsetTop;
  // 垂直总滚动距离
  const scrollDistanceY = scrollbox.offsetHeight - containerHeight;
  // 水平总滚动距离
  const scrollDistanceX = margin * 2 + container.offsetWidth - innerWidth;

  // 当前垂直滚动距离
  const moveY = window.scrollY - scrollbox.offsetTop;
  // 当前水平滚动距离
  // scrollDistanceX / scrollDistanceY =  moveX / moveY
  const moveX = (scrollDistanceX / scrollDistanceY) * moveY;

  // 是否滚动到scrollBox底部
  const scrollBoxToEnd =
    window.scrollY >=
    scrollbox.offsetTop + scrollbox.offsetHeight - containerHeight;

  if (scrollBoxInView && !scrollBoxToEnd) {
    container.style.transform = `translate(-${moveX}px,${moveY}px)`;
  }
}

window.addEventListener("scroll", scroll);
window.addEventListener("load", resize);
window.addEventListener("resize", resize);
