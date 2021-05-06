import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'


import Loading from './Loading'
// import Home from './Home'
// import About from './About'


// 路由组件懒加载
const Home = lazy(() =>  import('./Home'))
const About = lazy(() => import('./About'))
export default class LazyLoad extends Component {
    render() {
        return (
            <div>

                <NavLink to="/about">About</NavLink>
                <br />
                <NavLink to="/home">Home</NavLink>


                <Suspense fallback={
                    // <h1>loading...</h1>
                    
                    <Loading/>
                }>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                </Suspense>

            </div>
        )
    }
}
