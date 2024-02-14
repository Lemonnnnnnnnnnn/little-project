const imgs = document.querySelectorAll("img");
const container = document.querySelector(".container");
const line = document.querySelector(".line");
let start_mouse_x = 0;
let start_mouse_y = 0;
let moving = false;
// clientWidth：对象内容的可视区的宽度，不包滚动条等边线，会随对象显示大小的变化而改变。
// offsetWidth：对象整体的实际宽度，包滚动条等边线，会随对象显示大小的变化而改变。 元素内无内容或者内容不超过可视区，滚动不出现或不可用的情况下。
const container_width = container.offsetWidth;
const container_height = container.offsetHeight;
let imgs_data = [];
const line_width = line.childElementCount;
const gap = 48;

function init() {
  registerMouse();
  imgs_data = [...imgs].map((img) => ({
    node: img,
    x: img.offsetLeft + img.offsetWidth,
    y: img.offsetTop + img.offsetHeight,
    moved_x: 0,
    moved_y: 0,
    ani: 0,
  }));
}

function registerMouse() {
  container.addEventListener("mousedown", (e) => {
    moving = true;
    start_mouse_x = e.clientX;
    start_mouse_y = e.clientY;
  });

  container.addEventListener("mousemove", (e) => {
    move(e.clientX, e.clientY);
  });

  container.addEventListener("mouseup", (e) => {
    moving = false;
  });

  container.addEventListener("mouseleave", () => {
    moving = false;
  });
}

function move(x, y) {
  if (!moving) return;
  const distance_x = x - start_mouse_x;
  const distance_y = y - start_mouse_y;

  imgs_data.forEach((img) => {
    let duration = 0.3;
    img.moved_x += distance_x;
    img.moved_y += distance_y;
    if (img.moved_x + img.x >= container_width) {
      img.moved_x -= container_width + gap;
      duration = 0;
    }

    if (img.moved_x + img.x < 0) {
      img.moved_x += container_width + gap;
      duration = 0;
    }

    if (img.moved_y + img.y >= container_height) {
      img.moved_y -= container_height + gap;
      duration = 0;
    }

    if (img.moved_y + img.y < 0) {
      img.moved_y += container_height + gap;
      duration = 0;
    }

    // img.node.style.transition = `${duration}s ease`;
    // img.node.style.transform = `translate(${img.moved_x}px, ${img.moved_y}px)`;

    // 使用gsap库进行性能优化
    gsap.to(img.node, {
      transform: `translate(${img.moved_x}px, ${img.moved_y}px)`,
      duration,
      // 用 overwrite 属性处理 conflicting tweens
      // 默认属性是 false，动画过程为: 移动 img（被打断） -> 移动img 到开头（无动画） -> 继续完成移动 img（出现闪烁）
      overwrite: true, 
      ease: "power4.out",
    });
  });

  // 每次移动时更新起点，使 distance 成为相对移动的距离
  start_mouse_x = x;
  start_mouse_y = y;
}

window.addEventListener("load", init);
