import React, { Component } from 'react'
import CartContext from '../CartContext'
import {useContext} from 'react'

class Cart extends Component {
  const {item} = useContext(CartContext)
  render() {
    return (
      <div>Cart</div>
    )
  }
}

export default Cart