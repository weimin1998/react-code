import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: 'message001' },
      { id: '02', title: 'message002' },
      { id: '03', title: 'message003' }
    ]
  }
  replace = (id,title)=>{
    // replace跳转
    // 携带 params参数 
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)


    // 携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    // 携带state参数
    this.props.history.replace(`/home/message/detail`,{id,title})
  }

  push = (id,title)=>{
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    this.props.history.push(`/home/message/detail`,{id,title})
  }

  back=()=>{
    // this.props.history.goBack()
    this.props.history.go(-1) // 回退一步
  }

  forward=()=>{
    // this.props.history.goForward()
    this.props.history.go(1) //前进一步
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map((message) => {
              return (
                <li key={message.id}>

                  {/* 向路由组件传递参数 params参数*/}
                  <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                  {/* 向路由组件传递参数 search参数*/}
                  {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

                  {/* 向路由组件传递参数 state,和组件的state没关系  */}
                  {/* <Link replace={true} to={{pathname:'/home/message/detail',state:{id:message.id,title:message.title}}}>{message.title}</Link> */}

                  {/* replace   想想history   stack  push */}




                  {/* 上面的三种写法都是 点击路由 */}
                  {/* 编程式路由    */}

                  <button onClick={()=>{this.push(message.id,message.title)}}>push</button>
                  <button onClick={()=>{this.replace(message.id,message.title)}}>replace</button>
                </li>
              )
            })
          }

        </ul>
        <hr />
        {/* 路由组件接受参数 params*/}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
        {/* search参数无须 接受 */}
        <Route path="/home/message/detail" component={Detail}></Route>

        {/* state参数无须 接受 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}


        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
      </div>
    )
  }
}
