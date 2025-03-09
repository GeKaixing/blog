## react的生命周期
react的类组件有生命周期而函数组件则没有
可以通过类组件来查看生命周期都有哪些
挂载
- 构造函数 constructor()
- 获取props static getDerivedStateFromProps()
- 渲染组件 reder()
- 生成DOM后 componentDidMount()
更新
— 获取Props static getDerivedStateFromProps()
- 是否重新渲染组件 shouldComponentUpdate()
— 渲染组件 reder()
- 获取更新DOM前的快照 getSnapshotBeforeUpdate()
— 获取更新后的DOM componentDidUpdate()
卸载
- 卸载组件 componentWillUnmount()  
错误
- static getDerivedStateFromError 更新state，可以使用错误ui
- componentDidCatch 记录错误信息
而函数组件则可以通过useEffect函数模拟  
```js
useEffect(()=>{
console.lof('componentDidMount') & componentDidUpdate
},[]) componentDidUpdate
useEffect(()=>{return()=>{console.log(componentWillUnmount)}})
```


