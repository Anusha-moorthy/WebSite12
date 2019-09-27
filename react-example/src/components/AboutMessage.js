import React from 'react'
import { connect } from 'react-redux'

// var fn_loadDataFromStore  =  connect(mapStateToProps_wishes)
// var res_collected_wishes = fn_loadDataFromStore(WishListViewComponent)
// export var WishList = res_collected_wishes


const mapStateToProps_about_message = function mapper(state)  {
  console.log("in about messagemapper " + JSON.stringify(state))
  console.log("about to return "+state.univ.rating)
  let wrapperObject ={
    
    text1:state.univ.text,
    rating:state.univ.rating
    
  }
  return wrapperObject; 
}



const Item_About = ({rating}) => (
  <h3      >
    {rating}
    
    
     </h3>
  
)
const Item_Rating = ({text1}) => (
  <h3      >
    {text1}
    
     </h3>
  
)
// const Item = ({ obj }) => (
//   <h3>
      
//     {obj.text}
//   </h3>
// )
var connected_reciever_of_viewComponent  =  connect(mapStateToProps_about_message)
export var AboutMessage = connected_reciever_of_viewComponent(Item_About)
export var RatingMessage = connected_reciever_of_viewComponent(Item_Rating)

  


