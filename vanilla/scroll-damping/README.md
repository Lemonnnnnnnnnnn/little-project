思路来自于：[【前端 | 教程】纯干货！三步实现滑动阻尼效果](https://www.bilibili.com/video/BV1QN411T7gW/?spm_id_from=333.999.0.0&vd_source=46ec3a848cbcd369fb3ada66147055a7)

原理：
- 用 fixed 布局将浏览器滚动行为和视图分开。
- 通过监听 `window.scroll` 事件来自定义视图的滚动行为
- 用 `transform: translateY` + `transition` 定义阻尼效果。