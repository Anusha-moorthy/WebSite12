import React from 'react'
import { connect } from 'react-redux'

// var fn_loadDataFromStore  =  connect(mapStateToProps_wishes)
// var res_collected_wishes = fn_loadDataFromStore(WishListViewComponent)
// export var WishList = res_collected_wishes

  var connectedText= connect((state)=>{return state['text']});
  const Item = ({ onClick, completed, text }) => (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
  var res_connected_View = connectedText(Item)

const Dynalist =({ dispatch }) => (

  <div style={{ textAlign: 'center' }}  >
    <table stylingObject={{ borderType: 1, padding: '2rem', borderColor: 'red', fontSize:16 }}
 >
      <tr>
        <td>
          <a onClick={e => {
          e.preventDefault()
          let obj = {
            type: 'UNIV',
            id: 1,
            text:'UNIVEDIN',
            rating:'7/10'
          }
            dispatch(obj)
 
          
        }}>University of Edinburg1 
          </a>
         
        <div>

        </div>
        </td>
        <td>
UK
        </td>
      </tr>
      <tr>
        <td>
          University of Manchester1
        </td>
        <td>
UK
        </td>
      </tr>
      <tr>
        <td>
          University of California, Berkerley1
        </td>
        <td>
USA
        </td>
      </tr>
    </table>



  </div>

)

export default connect()(Dynalist)

