const nextBtn = document.getElementsByClassName("next-btn")[0];
const prevBtn = document.getElementsByClassName("prev-btn")[0];
const container = document.getElementsByClassName("container")[0];

// 问题：交互时样式错乱

function push() {
  // 停止动画，并交换元素位置
  const firstImg = container.firstElementChild;

  container.setAttribute("style", "transition: none;transform:none");
  container.appendChild(firstImg);
}

function unshift() {
  // 停止动画，并交换元素位置
  const lastImg = container.lastElementChild;

  container.insertBefore(lastImg, container.firstElementChild);
}

function toRight() {
  container.setAttribute("style", `transform: translateX(-100%);`);

  setTimeout(() => {
    push();
  }, 300);
}

function toLeft() {
  unshift();

  container.setAttribute(
    "style",
    "transition: none;transform:translateX(-100%)"
  );
  setTimeout(() => {
    container.setAttribute("style", `transform: translateX(0);`);
  }, 10);
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
