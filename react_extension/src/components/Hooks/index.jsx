import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//  class Hooks extends Component {
//     state = {count:0}

//     add = ()=>{

//         this.setState((state,props)=>{
//             return {count:state.count+1}
//         })
//     }

//     render() {
//         return (
//             <div>
//                 count：{this.state.count}
//                 <br/>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
//         )
//     }
// }

// 函数式组件 使用 hooks

function Hooks() {

    // useState
    // 操作state
    const [count,setCount] = React.useState(0)

    function add() {
        // setCount(count+1)  第一种写法
        

        setCount((count)=>{return count+1})
    }

    const [name,setName] = React.useState('tom')

    function change() {
        setName('weimin')
    
    }




    // useEffect
    // 使用生命周期函数
    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        },1000)

        return ()=>{
            // 卸载组件之前 删除定时器
            clearInterval(timer)
        }
    },[])




    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }



    // useRef

    const myref = React.useRef()
    function show(){
        alert(myref.current.value)
    }
    return (
        <div>
            count：{count}
            <br/>
            name:{name}
            <br />
            <button onClick={add}>点我+1</button>
            <br/>
            <button onClick={change}>点我改名</button>

            <br/>
            <button onClick={unmount}>卸载组件</button>


            <br/>

            <input type="text" ref={myref}/>

            <button onClick={show}>点我提示数据</button>
        </div>
    )
}
export default Hooks
