import React from 'react'
import style from '../styles/CartItem.module.css'


const CartMap = (props) => {
   const { items, removeFromCart } = props

   return (
      <ul className={style.Ul}>
         {items.map((item) => {
            const { name, price, key } = item;
            return <div className={style.Grid}>
                     <div className={style.A}>
                        <div className={style.Name}>{key}{name}</div>
                        <div className={style.Price}>{price}</div>
                     </div>
                     <div className={style.D}>
                        <div><button className={style.removeButton} onClick={() => removeFromCart(item)}>Remove</button></div>
                     </div>
                  </div>
         })}
      </ul>
   )
}

export default CartMap