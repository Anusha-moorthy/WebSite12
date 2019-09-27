import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

var BuyListViewComponent = ({ buys}) => (
  
  <ul>
    {buys.map(buy =>
      <Item
        key={buy.id}
        {...buy}
      
      />
    )}
  </ul>
)


export default BuyListViewComponent
