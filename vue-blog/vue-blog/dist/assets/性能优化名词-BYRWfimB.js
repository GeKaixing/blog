const n=`|名词|意思|时间|
|-----|----|----|
| RAIL  | chrome于2015年提出的性能模型Respone，Animation，Ible，Load
|FCP/first contentful paint|这是用户第一次看到的内容|2s
|LCP/largest contentful paint|可见元素呈现到屏幕的时间|2.5s
|FID/first input delay| 用户第一次与文档交互能够响应的时间|100ms
|TTI/Time to Interactive|网页第一次完全到达可交互的时间点，持续可交互时间或可流畅交互时间|3.8s
|TBT/total block time|总堵塞时间|300ms
|CLS|累计布局位移|0.1ms

chrome于2020重新进行梳理Web Vital重新定义加载性能LCP，交互性FID，视觉稳定性CLS。

`;export{n as default};
