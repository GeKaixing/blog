const n=`### 浏览器是一个多进程多形成的应用程序
浏览器启动的时候会开启多个进程如：浏览器进程，网络进程，渲染进程（现在默认版本一个标签页一个小渲染进程）。每个内存有独立的内存空间。一开始只有浏览器进程，浏览器进程会开启其他子进程，例如：网络进程，渲染进程，其他为子进程。
### 渲染进程
一个标签页为一个进程，进程间互不影响，每个进程都为一个独立的沙盒。事件循环发生在渲染主线程。渲染主线程需要做很多事，它使用从消息队列一个一个的把事件或任务拿出来在渲染线程，排队方式来处理这些事件或者任务，只能执行当前的任务，再执行**任务队列或消息队列**下一个任务，例如解析html，解析css，
执行全局 JS 代码... 
* 在最开始的时候，浏览器主线程会进入一个无限循环
* 每一次循环会检查时候有任务存在，有就取出第一个任务执行，再循环检查，没有就进入休眠状态。突然出现一个任务就会唤醒。
* **其他所有线程**可以随时向消息队列末尾添加任务。
**这就是事件循环**
### 异步
那些无法立即执行/处理的任务例如：计时器，网络请求，用户交互
如果让渲染主线程等待这些任务的时机代码，就会导致主线程长期处于**堵塞状态**用户会觉得卡了。例如，单有一个计时器5秒的函数，主线程会等五秒后再执行该函数，就会造成后面的任务堵塞，这是同步执行。**异步执行**主线程执行计时器任务是不会等待5秒后执行函数，而是从消息队列取下一个任务执行。主线程遇到计时任务后通知计时线程，计时线程5秒后将回调函数放到消息队列后面排队。**异步功能**是js的寄主环境提供的，例如浏览器，node.js。js本身不支持异步
### 队列的优先级
消息队列不止一个，**微队列（高）**，**交互队列（中）**，**延时队列（低）**。当执行一个任务的时候会产生新任务，所以执行全局js时候产生新任务，而新任务在有可能在不同的队列，而队列的执行顺序不一样，例如微队列的任务优先级高于延时队列，所以微队列中任务会先于延时队列的任务。同类任务必须在同队列，不同任务可以在不认同队列。
\`\`\`javascript
settimeout(()=>console.log('hello world'),5000)
promise.resolve.then(()=>console.log('hello'))
console.log('world')
\`\`\`
### 附加
* 当settimeout 0 嵌套超过5层，第6层的时候会变成4ms。
* 单线程是异步产生的原因
* 事件循环是异步的现实方式`;export{n as default};
