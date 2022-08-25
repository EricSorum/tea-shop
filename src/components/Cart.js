import React, { Component } from 'react'
import CartMap from './CartMap'
import style from '../styles/Cart.module.css'
/*
The Cart component occupies the right part of the page.
When the user clicks the Cart button, the contents of the cart appear 
in a box below through the toggleCart function.
*/
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
                {/*
                If there are items in the Cart, the Checkout button is displayed.
                If there are none, "No items in cart" is displayed.
                */}
                {this.props.cartItems.length > 0 ? 
                <button className={style.checkoutButton}>Checkout</button>
                : <span className={style.noItems}>No items in cart.</span>}
              </div>
          : null}
      </div>
    )
  }
}

export default Cart