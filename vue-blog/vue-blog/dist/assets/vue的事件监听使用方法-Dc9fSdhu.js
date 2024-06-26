const t=`date：2023/12/20
# vue的监听器
### 需要状态变化的时候执行'副作用'函数
没有作用的函数：输入什么输出什么
watch的**第一个参数**可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组
watch如果的一个参数是一个响应式对象，默认是深层监听器。可以用deep：true转换成深层监听器
watch默认是**懒执行**的：仅当数据源变化时，才会执行回调。immediate: true 选项来强制侦听器的回调立即执行
### watchEffect 
watchEffect和watch的不同。立刻执行，自动追踪响应数据
### 回调的触发时间
watchEffect和watch都会在 Vue 组件**更新之前被调用**。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。
#### Vue 组件更新之前被调用
watchEffect 
#### Vue 组件更新之后被调用
watchPostEffect()
#### 停止侦听器
同步watch，绑定宿主组件，**自动停止**
异步watch，不会绑定宿主组件，调用返回的函数手动停止，**防治内存泄露**
vue官方建议在同步**watch使用条件式的监听**，\`if()\`等`;export{t as default};
