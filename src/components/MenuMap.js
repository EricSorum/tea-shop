import React from 'react'
import styles from '../styles/MenuMap.module.css'

const MenuMap = (props) => {
   const { items, addToCart } = props
   
   return (
      <ul className={styles.Ul}>
         {items.map((item) => {

            const { name, size, description, img } = item;

            const sizeHandler = (e) => item.size = e.target.value;
            return <div key={Math.floor(Math.random() * 10000)} className={styles.itemGrid}>
                     <div className={styles.A}>
                        <div className={styles.Name}>{name}</div>
                     </div>
                     <div className={styles.B}>
                        <div className={styles.Description}>{description}</div>
                           <label htmlFor='size'>Size: </label>
                           <select name="size" id="size" value={size} onChange={e => sizeHandler(e)}>
                              <option value="Small">Small $3.99</option>
                              <option value="Medium">Medium $4.99</option>
                              <option value="Large">Large $5.99</option>
                           </select>
                     </div>                     
                     <div className={styles.C}>
                           <img src={img} alt={item.name} className={styles.Image} />
                     </div>
                     <div className={styles.D}>
                           <button onClick={() => addToCart(item)} className={styles.addButton}>Add to Cart</button>
                     </div>
                  </div>
         })}
      </ul>
   )
}

export default MenuMap