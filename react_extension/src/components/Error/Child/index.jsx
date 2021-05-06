import React, { Component } from 'react'

export default class Child extends Component {
    // state ={users:[{id:1,name:'weimin'},{id:2,name:'haha'}]}
    state = {name:'weimin'}
    render() {
        return (
            <div>
                {
                    this.state.users.map((user)=>{
                        return <h3 key={user.id}>{user.name}</h3>
                    })
                }
            </div>
        )
    }
}
