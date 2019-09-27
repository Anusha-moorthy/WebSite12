import { combineReducers } from 'redux'
import {wishes} from './wishes'
import {buys} from './buys'
import {univ} from './univ'
 

export default combineReducers({
  wishes,
  buys,
  univ
  
})
