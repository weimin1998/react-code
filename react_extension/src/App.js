import React, { Component } from 'react'
import A from './components/Context'
import Count from './components/Count'
import Error from './components/Error'
import Fragment from './components/Fragment'
import Hooks from './components/Hooks'
import LazyLoad from './components/LazyLoad'
import Parent from './components/Pure'
import RenderProps from './components/RenderProps'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Count/> */}
        {/* <LazyLoad/> */}
        <Hooks/>
        {/* <Fragment/> */}

        {/* <A/> */}

        {/* <Parent/> */}

        {/* <RenderProps/> */}
        {/* <Error/> */}
      </div>
    )
  }
}
