import React from 'react'
import AddItems from '../containers/AddItems'
import { WishList } from '../containers/VisibleList'
import { BuyList } from '../containers/VisibleList'

function Hello(props) {
  return <h1 style={props.stylingObject} >{props.message}</h1>
}

const ShoppingApp = () => (

  <div style={{ textAlign: 'center' }}  >
    <Hello message="Welcome to Shopping1 website" stylingObject={{ color: 'blue', padding: '2rem', textAlign: 'center', fontFamily: 'monospace' }}
    />
    <AddItems />
    <table >
      <tr>
        <td>
          <h3>================Your Wish List=================</h3>
        </td>
        <td>
          <h3>================Your Buy List=================</h3>
        </td>

      </tr>
      <tr>
        <td>

          <WishList />
        </td>
        <td>
          <BuyList />
        </td>
      </tr>
    </table>



  </div>
)

export default ShoppingApp
