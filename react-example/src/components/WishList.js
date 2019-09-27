import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


var WishListViewComponent = ({ wishes}) => {
  console.log("in todolist view "+ JSON.stringify(wishes))
  var y = 
  <ul>
    {wishes.map(wish =>
      <Todo
        key={wish.id}
        {...wish}
      
      />
    )}
  </ul>
  return y
    }


export default WishListViewComponent
