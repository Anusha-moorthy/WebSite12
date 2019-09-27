import React from 'react'
import { connect } from 'react-redux'
import {fn_AddToBuy} from '../actions/index'
import {fn_AddToWish} from '../actions/index'



const AddItemsComponent = ({ dispatch }) => {
  let input

  return (
    <div style={{textAlign:'center'}}>
        <input ref={node => input = node} size="20"  />
        <br>
        </br>
        <hr></hr>
        <button type="submit" onClick={e => {
          e.preventDefault()
          if(input.value=='yyy'){
            alert('cant add')
          }else{
            dispatch(fn_AddToWish(input.value))
          }
          
        }}>
          Add WishList
        </button>
        <button type="submit" onClick={e => {
          e.preventDefault()
          if(input.value=='xxx'){
            alert('cant add')
          }else{
          dispatch(fn_AddToBuy(input.value))
          }
        }}>
          Add to Cart
        </button>
      </div>
  )
}



export default connect()(AddItemsComponent)
