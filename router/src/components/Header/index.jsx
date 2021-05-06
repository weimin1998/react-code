import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {

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
            <div className="page-header">
                <h2>React Router Demo</h2>

                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </div>
        )
    }
}
// withRouter 是一个函数，接受一个一般组件，加工一下，就有了路由组件的api
export default withRouter(Header)
