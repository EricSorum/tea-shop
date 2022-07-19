import React, { Component } from 'react'
import CartMap from './CartMap'
import style from '../styles/Cart.module.css'

export class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showCart: false,
    }
    this.toggleCart = () => {this.setState({showCart: !this.state.showCart})}
  }

  render() {
    return (
      <div className={style.cartDiv}>
        <div><button className={style.cartButton} onClick={this.toggleCart}>Cart  {this.props.cartItems.length}</button></div>
          {this.state.showCart ? 
              <div className={style.cartBox}>
                <CartMap items={this.props.cartItems} removeFromCart={this.props.removeFromCart}/> 
                <button className={style.checkoutButton}>Checkout</button>
              </div>
          : null}
      </div>
    )
  }
}

export default Cart