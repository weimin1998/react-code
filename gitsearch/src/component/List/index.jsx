import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const { users,err,isFirst,isLoading } = this.props
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
