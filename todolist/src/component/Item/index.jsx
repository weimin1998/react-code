import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {

    state={mouse:false}

    handleMouse=(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }


    handleCheck=(id)=>{
        return (event)=>{
            
            this.props.undateTodo(id,event.target.checked)
        }
    }

    handleDelete=(id)=>{
         if(window.confirm('确定删除吗')){
            this.props.deleteTodo(id)
         }
        
    }

    render() {
        const {id,name,done} = this.props
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor:this.state.mouse? '#ddd':'white'}}>
                <label>
                    <input type="checkbox" checked={done} onChange = {this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.mouse?'block':'none' }} onClick = {()=>{this.handleDelete(id)}}>删除</button>
            </li>
        )
    }
}
