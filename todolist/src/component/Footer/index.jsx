import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {


    handleCheckAll=(event)=>{
        this.props.checkAllTodos(event.target.checked)
    }

    clearAllDone=()=>{
        this.props.clearAllDoneTodos()
    }
    render() {

        const {todos} = this.props

        // 全部
        const total = todos.length

        // 已完成
        const dones = todos.reduce((pre,todo)=>{
            return pre+(todo.done?1:0)
        },0)
        return (

            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked = {dones===total && total!==0?true:false} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{dones}</span> / 全部{total}
          </span>
                <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
            </div>

        )
    }
}
