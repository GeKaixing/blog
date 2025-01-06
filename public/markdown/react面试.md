# useLayoutEffect 和 useEffect 的区别

# 什么是 react 的高阶组件

# useMemo 和 useCallback 的区别

# 如何缓冲 react 组件

# 如何减少 useSate 的渲染次数

# react 中函数组件的和类组件的区别

# hooks

- useMemo
  - 缓存函数结果
  - 参数 1：函数 参数 2：依赖项
  - 依赖性改变时才执行
  - 应用场景：render 函数中，需要多次调用一个函数，但是这个函数的返回值是固定的，那么就可以使用 useMemo 缓存这个函数的返回值，减少 render 函数的调用次数，如果每次都需要这个函数执行着不需要使用 useMemo
- useImperativeHandle

  - 当父组件使用子组件的 ref，子组件可以使用这个 hook 自定义暴露的 ref 是什么
  - 参数 1 :props 中的 ref ，参数 2 :ref 自定义暴露的 ref 可以是任何值，参数 3：可选值

- useInsertionEffect
  - 组件挂载—————>state 改变—————>useInsertionEffect—————>DOM 改变—————>绘制屏幕
- useLayoutEffect
  - 组件挂载—————>state 改变—————>DOM 改变—————>useLayoutEffect—————>绘制屏幕
- useEffect
  - 组件挂载—————>state 改变—————>DOM 改变—————>绘制屏幕—————>useEffect
- useDebugValue
  - 在 devtools
  - useDebugValue('test')
- useDeferredValue
  - 延迟渲染
  - 参数 1：需要延迟渲染的 state，会为该state创建一个延迟值
  - 当设置了延迟值后，每次state修改是都会延迟渲染，直到延迟渲染结束，
  - 这两次执行对于其他的部分没有区别，但是延迟值两次执行的值是不同的
  - 第一次执行是 延迟值是state的旧值，第二次执行时，延迟值是state的新值
  - 延迟值，总是会比原版的state，慢一步更新
  - const deferreValue=useDeferredValue(state)
    
  - 返回一个 state
- useTransition
  - 延迟渲染
  - 返回[isPending,startTransition]=useTransition()
  - startTransition(()=>{setTab(nextTab);})
- useId
  - 生成一个唯一的 id
# api

- forwardRef
  - 父组件使用子组件的 ref
  - const children= React.forwardRef(({ref})=>{<div ref={ref}></div>})
  - **react 19 弃用**
