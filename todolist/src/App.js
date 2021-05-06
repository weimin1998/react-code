import './App.css';
import React from 'react';
import Header from './component/Header';
import List from './component/List';
import Footer from './component/Footer';

export default class App extends React.Component {
  state = {todos:[
    {id:'001',name:'恰饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'学习',done:true},
    {id:'004',name:'逛该',done:true}
  ]}

  addTodo=(todoObj) =>{
      const {todos} = this.state
      this.setState({todos:[todoObj,...todos]})
  }

  updateTodo=(id,done)=>{
      const {todos} = this.state
      const newTodos = todos.map((todo)=>{
          if(todo.id===id)  return {...todo,done}
          else return todo
      })

      this.setState({todos:newTodos})
  }

  deleteTodo=(id)=>{
      const {todos} = this.state

      // 把要删除的过滤掉
      const newTodos = todos.filter((todoObj)=>{
        return todoObj.id!==id
      })

      this.setState({todos:newTodos})
  }

  checkAllTodos=(done)=>{
      const {todos} = this.state

      const newTodos = todos.map((todoObj)=>{
        return {...todoObj,done:done}
      })

      this.setState({todos:newTodos})
  }

  clearAllDoneTodos=()=>{
    const {todos} = this.state

    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done===false
    })

    this.setState({todos:newTodos})
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo = {this.addTodo}/>
          <List todos={this.state.todos} undateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={this.state.todos} checkAllTodos={this.checkAllTodos} clearAllDoneTodos={this.clearAllDoneTodos}/>
        </div>
      </div>
    )
  }
}
