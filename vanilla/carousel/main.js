const nextBtn = document.getElementsByClassName("next-btn")[0];
const prevBtn = document.getElementsByClassName("prev-btn")[0];
const container = document.getElementsByClassName("container")[0];

// 问题：轮播图无法向前循环

function push() {
  const firstImg = container.firstElementChild;

  container.appendChild(firstImg.cloneNode(true));
  firstImg.remove();
}

function toRight() {
  if (container.scrollLeft === container.scrollWidth - container.clientWidth) {
    push();
  }

  setTimeout(() => {
    container.scrollLeft += container.clientWidth;
  }, 50);
}

function toLeft() {
  container.scrollLeft -= container.clientWidth;
}

nextBtn.addEventListener("click", () => {
  toRight();
});

prevBtn.addEventListener("click", () => {
  toLeft();
});

setInterval(() => {
  toRight();
}, 2000);
