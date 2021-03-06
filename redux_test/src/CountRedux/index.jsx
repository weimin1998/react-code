import React, { Component } from 'react'
import store from '../redux/store'
export default class CountRedux extends Component {
    state={value:'weimin'}

    increment=()=>{
        const {value} = this.selectNumber
        store.dispatch({type:'increment',data:value*1})
    }
    decrement=()=>{
        const {value} = this.selectNumber
        store.dispatch({type:'decrement',data:value*1})
    }
    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        const count = store.getState()

        if(count%2!==0){
            store.dispatch({type:'increment',data:value*1})
        }
    
    }
    incrementAsync=()=>{
        const {value} = this.selectNumber

        setTimeout(()=>{
            store.dispatch({type:'increment',data:value*1})
        },500)
    
        
    }


    // componentDidMount(){
    //     // 监测redux中 保存的状态 任何一个发生变化 ，就会调这里
    //     // 可以写在入口index.js中
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    render() {
        return (
            <div>
                <h2>当前和为：{store.getState()}</h2>
                <select ref={c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;

                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
