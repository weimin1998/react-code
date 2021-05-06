import React, { Component } from 'react'

import './App.css'
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {

  

  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Search />
          <List/>
        </div>
      </div>
    );
  }
}

