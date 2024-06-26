const n=`### DNS预解析
当浏览器访问一个域名时会将该域名解析ip地址。
\`\`\`js
<link rel="dns-prefetch" href="https://www.example.com">
\`\`\`
### 预加载
preload：表示浏览器应该尽快下载该资源，并将其缓存在本地。
prefetch：表示浏览器应该在有空闲时间时下载该资源，并将其缓存在本地。
\`\`\`js
<link rel="preload" href="http://example.com" />
<link rel="prefetch" href="http://example.com" />
\`\`\`
### 预渲染
\`\`\`js
<link rel="prerender" href="http://example.com" />
\`\`\`
**预加载和预渲染**都应该用户一定需要的时候使用
### 浏览器缓存
    缓存都需要服务器支持。
    强缓存：未过期期间，期间浏览器不会请求。tcp前
    协商缓存：浏览器向服务器请求对比时间戳和文件标识，不同响应，同使用浏览器缓存。tcp后
* 强缓存
    Expires
    Cache-Control 
    - Expires值为时间戳，浏览器返回资源的缓存到期时间，使用本地时间来判断，当没有过期就使用浏览器缓存
    - Cache-Control值为public，privite，no-cache，no-store(不使用强缓存)，max-age(缓存保质期，是相对时间)，中的一个
    
* 协商缓存
    - 如何开启协议缓存
    Cache-Control:no-cache 
    Cache-Control:max-age=0
   - 浏览器第一次请求，然后服务器返回结果，并在响应头设置lase-modified的值为时间戳，文件在服务器最后被修改的时间；
    当浏览器再次发起请求，会在请求头中if-modified-since字段设置lase-modified字段的值，服务器会比较服务器的和返回字段的时机戳，当服务器的时间戳大于if-modified-since携带的时间戳则返回200状态码，返回最新数据/结果；诺不大于则返回304状态码，直接使用浏览器的缓存。
    if-modified-since值为last-modified
   - 浏览器第一次请求，然后服务器返回结果，并且在响应头设置的Etag字段值为文件当前状态/文件指纹，诺文件内容发生变化，则值改变。
    当浏览器再次发起请求，请求头会中if-none-match字段会携带上次Etag得值，发送给服务器，服务器根据if-none-match得值和资源在服务器的Etag的值做比较，值不同则返回200状态码，返回最新数据，和最新Etag值；值相同则返回304状态码，直接使用浏览器的缓存。且Etag优先级高于last-modified。
    if-none-match值为Etag 
    
### 懒加载
\`\`\`js
    const topss = () => {
        const img = document.querySelectorAll('img[data-src]')
        for (let imgs of img) {
            // 该方法获取元素距离浏览器视口的高度，当高度小于浏览器的视口的高度的时，则表明该属性出现在浏览器视口中，设置img的src已显示图片，达到懒加载的目的
            if (imgs.getBoundingClientRect().top < window.innerHeight) {
                imgs.src = imgs.dataset.src
            }

        }
    }
    window.onscroll=topss
\`\`\`
#### 懒执行 
延迟执行函数
`;export{n as default};
