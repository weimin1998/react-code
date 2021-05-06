import React, { Component } from 'react'

export default class RenderProps extends Component {
    render() {
        return (
            <div>
                parent
                <A render={(name)=>{return <B name={name}/>}}/>
            </div>
        )
    }
}


class A extends Component {
    state ={name:'weimin'}
    render() {
        console.log(this.props)
        return (
            <div>
                A
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                Bbbbbb
                {this.props.name}
            </div>
        )
    }
}
