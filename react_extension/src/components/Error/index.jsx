import React, { Component } from 'react'
import Child from './Child'

export default class Error extends Component {

    state={hasError:''}

    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }

    componentDidCatch(){
        console.log('渲染组件时出错，一般用来统计出错的次数')
    }
    render() {
        return (
            <div>
                // 错误边界  只适用于生产环境
                {this.state.hasError?<h2>出错了</h2>:<Child/>}
                
            </div>
        )
    }
}