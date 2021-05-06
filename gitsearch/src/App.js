import React, { Component } from 'react'

import './App.css'
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {

  state = {
      users:[],
      isFirst:true,
      isLoading:false,
      err:''
  }

  updateState=(stateObj)=>{
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Search updateState={this.updateState}/>
          <List {...this.state}/>
        </div>
      </div>
    );
  }
}

