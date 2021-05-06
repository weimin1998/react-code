import React, { Component,PureComponent } from 'react'


// PureComponent
// 原理就是重写了 shouldComponentUpdate

export default class Parent extends PureComponent {
    state={car:'奔驰'}

    change=()=>{
        // this.setState({car:'法拉利'})

        // this.setState({})

        const obj = this.state;
        obj.car='haha'
        this.setState(obj)
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(this.props,this.state.car)
    //     // console.log(nextProps,nextState.car)

    //     if(nextState.car===this.state.car) return false
    //     else return true
    // }

    render() {
        console.log('父亲的render')
        return (
            <div>
                父亲的车：{this.state.car}
                <button onClick={this.change}>换车</button>

                {/* <Child car={this.state.car}/> */}
                <Child car='aotuo'/>
            </div>
        )
    }
}

class Child extends PureComponent{

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextProps.car === this.props.car) return false
    //     else return true
    // }
    render() {
        console.log('孩子的render')
        return (
            <div>
                
                孩子的车：
                {this.props.car}
            </div>
        )
    }
}
