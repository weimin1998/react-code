import React, { Component } from 'react'

import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        this.token = PubSub.subscribe('weimin',(_,data)=>{
            this.setState(data)
        })
    }
    
    render() {
        const { users,err,isFirst,isLoading } = this.state
        return (
            <div>
                <div className="row">
                    {
                        isFirst?<h2>Welcome!</h2>:
                        isLoading?<h2>loading...</h2>:
                        err?<h2>{err}</h2>:
                        users.map((user) => {
                            return (
                                
                                <div key={user.id} className="card">
                                    <a href={user.html_url} target="_blank" rel="noreferrer">
                                        <img alt="head" src={user.avatar_url} style={{ width: '100px' }} />
                                    </a>
                                    <p className="card-text">{user.login}</p>
                                </div>
                            )
                        })
                    } 


                </div>
            </div>
        )
    }
}
