import React, { Component } from 'react'
import axios  from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    
    search=()=>{
        // 用户数据

        const value = this.keywordvalue.value

        PubSub.publish('weimin',{isFirst:false,isLoading:true})
        // 发送请求
        axios.get('http://localhost:3000/api/search/users?q='+value).then(
            response =>{

                PubSub.publish('weimin',{isFirst:false,isLoading:false,users:response.data.items})
            },
            error =>{

                PubSub.publish('weimin',{isFirst:false,isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search" ref={(c)=>{this.keywordvalue=c}}/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
