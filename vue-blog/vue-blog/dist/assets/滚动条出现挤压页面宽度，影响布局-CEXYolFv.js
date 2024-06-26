const n=`### 答案收集
* chrome属性overlay
\`\`\`css
html {
  overflow-y: overlay;
}
\`\`\`
* margin-right: calc(100% - 100vw)
\`\`\`css
{
  margin: 0;
  padding: 0;
}
html {
  overflow-y: auto;
  overflow-x: hidden;
}
.container {
  height: 2000px;
  margin-right: calc(100% - 100vw);
  padding: 17px;
  background-color: #00b83f;
  text-align: right;
}
\`\`\`
* :root选择器：对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同。
\`\`\`css
html {
  overflow-y: scroll; //这是为了兼容ie8，不支持:root, vw
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}
\`\`\`
[滚动条出现挤压页面宽度，影响布局](https://www.cnblogs.com/weihuan/p/11681831.html#:~:text=%E6%B2%A1%E6%9C%89%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E6%97%B6%E5%80%99,ff%E9%83%BD%E6%B2%A1%E9%97%AE%E9%A2%98%E4%BA%86%E3%80%82)
<hr/>

`;export{n as default};
