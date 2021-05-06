// 引入 创建store
import {createStore} from 'redux'

// 
import countReducer from './count_reducer'

export default createStore(countReducer)