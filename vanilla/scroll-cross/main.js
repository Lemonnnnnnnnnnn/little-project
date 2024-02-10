const scrollbox = document.querySelector(".scrollbox");
const container = document.querySelector(".container");
const containerHeight = document.querySelector(".container").offsetHeight;
const innerBoxs = document.querySelectorAll(".innerbox");
const car = document.querySelector(".car");
const margin = 48;
const citysPosition = {
  0: 0,
  1: 800,
  2: 1600,
};

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
    car.style.transform = `translateX(${moveX * 1.9}px)`;
    for (let i in innerBoxs) {
      innerBoxs[i].style.backgroundPositionX = `${
        moveX * 1.2 + citysPosition[i]
      }px`;
      // cars[i].style.transform = `translateX(${moveX * 1.9}px)`;
    }
  }
}

window.addEventListener("scroll", scroll);
window.addEventListener("load", resize);
window.addEventListener("resize", resize);
