import React, { Component } from 'react'

import {Button,DatePicker,Calendar  }  from  'antd'

import {
  WeiboOutlined
} from '@ant-design/icons';

import 'antd/dist/antd.css'

export default class App extends Component {

  
  
  render() {
    return (
      <div>
        <Button type="primary">primary</Button>

        <WeiboOutlined />

        <DatePicker/>

        <Calendar/>
      </div>
    )
  }
}

