const scrollbox = document.querySelector(".scrollbox");
const viewbox = document.querySelector(".viewbox");

// 通过 Javascript 获取滑动容器原有高度，并赋值给 body ，body 的高度使浏览器初始滚动事件能够正常工作，于是我们可以正常监听 scroll 事件
function resize_body(){
    let height = scrollbox.offsetHeight;
    document.body.style.height = height + "px";
}

// 在滚动时将 scrollbox 向上/下移动，实现视图滚动效果
// 因为我们在 resize_body 函数中手动设置 body 的高度为 scrollbox 的高度，所以滚动的距离和 window.scrollY 是相等的
function scroll(){
    scrollbox.style.transform = `translateY(-${window.scrollY}px)`
}

window.addEventListener("load" , resize_body)
window.addEventListener("resize" , resize_body)
window.addEventListener("scroll", scroll)