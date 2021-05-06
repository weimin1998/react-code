import React, { Component } from 'react'
import Item from '../Item'

import './index.css'

export default class List extends Component {
    
    render() {
        const {todos,undateTodo,deleteTodo} = this.props;
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((todo)=>{
                            {/* return <Item key = {todo.id} id={todo.id} name={todo.name} done={todo.done}/> */}
                            return <Item key = {todo.id} {...todo} undateTodo={undateTodo} deleteTodo={deleteTodo}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
