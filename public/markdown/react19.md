* 支持文档元数据例如link meta title
* 支持样式表<style>{'div:{color:red}'}<style>
* 支持script 异步脚本 <script async={true} src={'..'}/>
* 支持预加载资源 通过react DOM引入的api{ prefetchDNS, preconnect, preload, preinit } 例如脚本，文字，样式，DNS
* 改进ref，现在ref可以直接组件通信不在需要高阶函数forwardRef(),支持清理函数
* 改进context 可以直接使用createContext api返回的值作为Provider 例如 const test=createContext();<test value={{'test1','test2'}}></test>
* 改进useuseDeferredValue，添加了第二个可选参数，默认值
* 新的hook useFormstatus useActionState 一个表单状态，一个action的状态 useOptimistic 乐观更新
* 新的api use 在渲染中读取资源，这以为这它在DOM改变前执行
* 新的概念 Action 一个异步过度函数，异步有三个状态“以兑现”，“以拒绝”，“待定中”，注意只能在非受控组件中使用
* 新的编译器React Compiler ，帮助开发者优化性能
```
import React, { useLayoutEffect, useEffect, useMemo, useCallback, useState, useRef, useContext, useReducer, useId, createContext } from 'react'
//react 19的新功能
import { useTransition } from 'react';
import Head from './head';
export const test = createContext(0);
export default function App() {

    console.log("app")
    console.log('1' + 1)
    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    }, [])
    useEffect(() => {
        console.log("useEffect")
    }, [])
    useMemo(() => { console.log("useMemo") }, [])
    useCallback(() => { console.log("useCallback") }, [])
    const [value, setValue] = useState(0)
    const ref = useRef(1)
    const use = useContext(1)

    const dd = useReducer()
    const id = useId()

    const [ispending, startTransition] = useTransition()
    const handleSubmit = () => {

        fetch('http://127.0.0.1:4000/modifyingbirthday', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
           {     data: { 
                    birthday: "12/06",
                    id: '66a9045019b4500106be7218'
                }}
            )
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('成功:', data);
            // 更新页面或其他操作
        })
        .catch(error => {
            console.error('错误:', error);
            // 处理错误，比如显示错误信息
        });

    }

    return (
        <div value={test}>
            <Head></Head>
            <button onClick={handleSubmit}>按钮</button>
        </div>
    )
}

```
