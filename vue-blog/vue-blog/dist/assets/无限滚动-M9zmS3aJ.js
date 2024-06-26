const n=`date:2023/12/12
# 无限滚动
### window.scrollY
这个全局属性表示:浏览器滚动条向下滚动了多少px（chrome/safari按键down一次是40px）
### 原理
document.body.scrollHeight：表示整个文档的高度，包括不显示的部分，可能显示的部分
window.innerHeight：表示浏览器窗口的内部高度，即浏览器视口的高度
window.scrollY：表示滚动条向下以滚动的像素
body.scrollHeight-window.innerHeight-window.scrollY<20
window.innerHeight + window.scrollY >=body.offsetHeight
|body.scrollHeight |window.innerHeight|window.scrollY|
\`\`\`javascript
if(window.innerHeight + window.scrollY >=body.offsetHeight){/* 渲染DOM */}
\`\`\`
100+0>=100 true 渲染50
100+0>=150 false 因为没有滚动，可变的只有滚动条和文档内容，当我们滚动100
100+100>=150 true 就会再渲染文档内容的后续部分，在下不可见部分，此时文档的长度变化，即会超过视口和滚动像素的高度。
### 其他
[这则博客描述了分页，加载更多，无限滚动的区别，和什么时候使用，如何编](https://juejin.cn/post/7067854699122130975)`;export{n as default};
