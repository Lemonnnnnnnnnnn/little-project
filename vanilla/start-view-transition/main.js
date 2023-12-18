const btn = document.querySelector("button");
const main = document.querySelector("main");
const ps = document.querySelectorAll("p");

let pIndex = 0;

/**
 * display:none 的过渡效果默认是 opacity: 0 <-> 1
 * 
 * 没有为p元素单独分组的动画效果，以整体为单位执行淡入淡出：
 * root-old -> root-new : 旧的淡出，新的淡入
 *
 * 为p元素单独分组的动画效果，第一个元素淡入淡出，其他元素执行过渡位移：
 * p1 : display:block -> display:none: 旧的淡出，新的淡入
 * p2 : 从第二个位置位移到第一个位置
 * p3 : 从第三个位置位移到第二个位置
 * ...
 */
ps.forEach((p) => {
  p.style.viewTransitionName = `p-${++pIndex}`;
});

btn.addEventListener("click", () => {
  // 兼容不支持 startViewTransition 的浏览器
  if (!document.startViewTransition) {
    removeOne();
  }

  // 指定开始 Transition 的事件，记录快照，自动检测 Transition 结束并检查在快照与最终效果之间设置过渡
  document.startViewTransition(() => {
    removeOne();
  });
});

function removeOne() {
  main.removeChild(main.firstElementChild);
}
