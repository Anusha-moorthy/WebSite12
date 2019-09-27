import React from 'react'
import AddItems from '../containers/AddItems'
import Statlist from './Statlist'
import Dynalist from './Dynalist'
function Hello(props) {
  return <h1 style={props.stylingObject} >{props.message}</h1>
}

const Univ = () => (

  <div style={{ textAlign: 'center' }}  >
    <Hello message="Welcome to Shopping1 website" stylingObject={{ color: 'blue', padding: '2rem', textAlign: 'center', fontFamily: 'monospace' }}
    />
    <AddItems />
    <table >
      <tr>
        <td>
          <h3>================Univ =================</h3>
        </td>
        <td>
          <h3>================Country=================</h3>
        </td>

      </tr>
      <Statlist/>
      <Dynalist/>
    </table>



  </div>
)

export default Univ
