import React, { Component } from 'react'
import qs from 'querystring'
const data = [
    { id: '01', title: 'message001', content: 'hello' },
    { id: '02', title: 'message002', content: 'i love you' },
    { id: '03', title: 'message003', content: 'China' }
]


export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接受params参数
        // const { id, title } = this.props.match.params

        // 接受search参数
        // const {search} = this.props.location
        // const{id,title} = qs.parse(search.slice(1))

        // 接受state参数
        const {id,title} = this.props.location.state || {}

        
        const content = data.find((detailObj)=>{
                return detailObj.id===id
        }) || {}
        return (
            <div>
                <ul>
                    <li>id:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{content.content}</li>
                </ul>
            </div>
        )
    }
}
