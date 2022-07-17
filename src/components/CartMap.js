import React from 'react'
import styles from '../styles/CartItem.module.css'


const CartMap = (props) => {
   const { items, removeFromCart } = props

   return (
      <ul className={styles.Ul}>
         {items.map((item) => {
            const { name, price, img, key } = item;
            return <div className={styles.Grid}>
                     <div className={styles.A}>
                        <div className={styles.Name}>{key}{name}</div>
                        <div className={styles.Price}>{price}</div>
                     </div>
                     <div className={styles.C}>
                        <img src={img} alt={name} className={styles.Image} />
                     </div>
                     <div className={styles.D}>
                        <div><button id="removeButton" onClick={() => removeFromCart(item)}>Remove from Cart</button></div>
                     </div>
                  </div>
         })}
      </ul>
   )
}

export default CartMap