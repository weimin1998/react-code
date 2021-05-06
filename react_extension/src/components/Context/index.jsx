import React, { Component } from 'react'

// context  和props，state,在一个级别
const Context = React.createContext()
export default class A extends Component {
    state ={username:'weimin',age:18}
    render() {
        return (
            <div>
                A的username:{this.state.username}
                <Context.Provider value={{username:this.state.username,age:this.state.age}}>
                    <B/>
                </Context.Provider>
                
            </div>
        )
    }
}


class B extends Component {
    render() {
        return (
            <div>
                B
                <C/>
            </div>
        )
    }
}

// class C extends Component {

//     static contextType = Context
//     render() {
//         return (
//             <div>
//                 C :{this.context.age},{this.context.username}
//             </div>
//         )
//     }
// }

function C(){
    return (
        <div>
            C :
            <Context.Consumer>
                {
                    value=>{
                        return `${value.username},${value.age}`
                    }
                }
            </Context.Consumer>
        </div>
    )
}
