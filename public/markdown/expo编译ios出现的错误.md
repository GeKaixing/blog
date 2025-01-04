# expo编译ios出现的错误  
+ 不要直接yarn run ios 会提示安装 CocoaPods CLI 这是必须的，而这对与我很难安装。而使用yarn run web然后在输入 i 这不需要安装 CocoaPods CLI。（M1 macos12.7.6）
+ 如果使用expo编写移动端和pc端请在操作浏览器的元素的时候请多多使用Platform.OS进行平台的判断，例如Platform.OS==="web"，这很重要，expo并没有很好的兼容它们。
