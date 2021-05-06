import React, { Component } from 'react'

export default class Count extends Component {
    state = {count:0}

    add = ()=>{
        // 对象式的 setState
        // this.setState({count:this.state.count+1},()=>{
        //     // 这里才是更新后的值
        //     // 这个回调函数 是在 更新完成，页面也刷新后才 调用的
        //     console.log("更新后的值：",this.state.count)
        // })

        // 下一行拿到的不是  更新后的值
        // console.log("更新后的值：",this.state.count)

        // 函数式的setState

        this.setState((state,props)=>{
            return {count:state.count+1}
        })
    }

    render() {
        return (
            <div>
                count：{this.state.count}
                <br/>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
