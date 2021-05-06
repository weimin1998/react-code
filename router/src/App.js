import React, { Component } from 'react'

import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}


              {/* 路由链接 Link NavLink */}
              {/* <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link> */}

              {/* 高亮  active */}
              {/* <NavLink activeClassName="weimin" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="weimin" className="list-group-item" to="/home">Home</NavLink> */}


              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}

                {/* <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/home" component={Test} /> */}

                {/* exact严格匹配 */}
                {/* <Switch>
                  <Route exact path="/about" component={About} />
                  <Route exact path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                </Switch> */}

                <Switch>
                  <Route exact path="/about" component={About} />
                  <Route  path="/home" component={Home} />
                  

                  <Redirect to="/about"/>
                </Switch>


              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
