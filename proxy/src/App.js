
import React from 'react';

import axios from 'axios'

export default class App extends React.Component {
   /////////////////////////
    // 代理相关

  //  第一种代理  
  // 在package.json中配置下面的
  // "proxy": "http://localhost:5000"
  // 表示代理到 这个地址

  // 使用axios发送请求时，要写自己的ip和端口号
  // http://ip:port/  代表的就是public文件夹
  // 当public下有这个资源 ，就不用服务器了
  // 比如 http://localhost:3000/index.html
  // 当前public文件夹有这个资源，就不去服务器了
  // 但是当 访问 http://localhost:3000/students 时
  // 因为当前public下没有这个资源，就会去服务器，
  // 也就是在package.json下配置 的 http://localhost:5000 加上资源名称students
  // 最终就会访问 http://localhost:5000/students

  // 为什么 不直接访问 http://localhost:5000/students 
  // 因为直接访问是ajax  ，就跨域了，需要代理服务器帮我们转发访问
  // 代理服务器访问 服务器是转发

  // 第一种代理 缺点是 3000没有的资源  就去5000找   
  // 相当于只能配置一个代理


  // getStudentData=()=>{
  //     axios.get('http://localhost:3000/students').then(
  //       response =>{console.log('成功了',response.data);},
  //       error =>{console.log('失败了',error);}
  //     )
  //   }
    ////////////////////////


  // 第二种代理方式
  // 在src下新建一个文件  setupProxy.js  必须是这个名字
  // react会找到这个文件执行

  getStudentData=()=>{
        axios.get('http://localhost:3000/api1/students').then(
          response =>{console.log('成功了',response.data);},
          error =>{console.log('失败了',error);}
        )
      }
  getCarData=()=>{
        axios.get('http://localhost:3000/api2/cars').then(
          response =>{console.log('成功了',response.data);},
          error =>{console.log('失败了',error);}
        )
      }
    /////////////////////////
    render() {
      return (
  
        <div>
          <button onClick={this.getStudentData}>获取数据</button>

          <button onClick={this.getCarData}>获取car数据</button>
        </div>
      )
  }
}
