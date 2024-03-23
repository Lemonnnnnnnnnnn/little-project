const my = {
    liNum: 10,
    li_list: [],
    prev: {},
    container: null,

    init() {
        const container = document.querySelector("ul")
        this.container = container
        // 插入原始 li 数据
        for (let i = 0; i < this.liNum; i++) {
            const li = document.createElement("li")
            li.id = i + 1;
            li.textContent = `${i + 1}`
            container.appendChild(li)
            this.li_list.push(li)
        }

        // 初始化 li 的位置数据
        for (let li of this.li_list) {
            let rect = li.getBoundingClientRect()
            this.prev[li.id] = {
                left: rect.left,
                top: rect.top
            }
        }

        const btn = document.querySelector("button")

        btn.addEventListener("click", () => {
            this.shuffle()
        })

    },

    shuffle() {
        this.li_list.sort(() => Math.random() < 0.5 ? -1 : 1)
        this.render()
    },



    render() {
        // 根据数组顺序，更新 li 元素位置
        for (let i = this.li_list.length - 1; i >= 0; i--) {
            const li = this.li_list[i]
            this.container.appendChild(li)
        }

        for (let i = this.li_list.length - 1; i >= 0; i--) {
            const li = this.li_list[i]
            let rect = li.getBoundingClientRect()
            let cur_x = rect.left
            let cur_y = rect.top
            let pre_y = this.prev[li.id].top
            let pre_x = this.prev[li.id].left
            let ret_x = pre_x - cur_x
            let ret_y = pre_y - cur_y
            // 先将 li 元素还原到原来的位置上
            li.style = `transform:translate(${ret_x}px, ${ret_y}px)`
            // 执行过渡动画
            li.animate([
                { transform: `translate(${ret_x}px, ${ret_y}px)` },
                { transform: `translate(0px, 0px)` },
            ], {
                duration: 800
            })
            // 将还原所设的 style 去除
            li.style = ""
            // 更新 li 元素的位置，支持再次调用
            this.prev[li.id] = {
                left: cur_x,
                top: cur_y
            }
        }
    }
}

addEventListener("load", my.init())