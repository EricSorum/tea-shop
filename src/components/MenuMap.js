import React from 'react'
import styles from '../styles/MenuItem.module.css'

const MenuMap = (props) => {
   const { items, addToCart } = props

   return (
      <ul className={styles.Ul}>
         {items.map((item) => {
            const { name, price, description, img, key } = item;
            return <div className={styles.Grid}>
                     <div className={styles.A}>
                        <div className={styles.Name}>{key}{name}</div>
                        <div className={styles.Price}>{price}</div>
                     </div>
                     <div className={styles.B}>
                        <div className={styles.Description}>{description}</div>
                     </div>
                     <div className={styles.C}>
                        <img src={img} alt={name} className={styles.Image} />
                     </div>
                     <div className={styles.D}>
                        <div><button id="cartButton" onClick={() => addToCart(item)}>Add to Cart</button></div>
                     </div>
                  </div>
         })}
      </ul>
   )
}

export default MenuMap