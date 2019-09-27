import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Shopping1 from './components/App'
import combineReducers from './reducers/index'
import reducer from './reducers/index';
import Univ from './components/App2'

const store = createStore(reducer)

// const store = createStore(combineReducers({
//   todos1,
//   items
  
// }))



render(
  
  <Provider store={store}>
    {/* <Shopping1 /> */}
    <Univ/>
  </Provider>,
  document.getElementById('root')
)
