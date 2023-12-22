const btns = document.querySelectorAll("div")

btns.forEach(btn => {
    btn.addEventListener("mousemove" , (e) => {
        // 计算鼠标所在位置相对于按钮左上角的坐标
        const x = e.pageX - btn.offsetLeft
        const y = e.pageY - btn.offsetTop

        btn.style.setProperty("--x" , x + "px");
        btn.style.setProperty("--y" , y + "px");
    })
})
