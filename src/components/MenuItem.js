import React from 'react'
import styles from '../styles/MenuItem.module.css'

const MenuList = (props) => {
   const { items } = props
   return (
      <ul className={styles.ul}>

         {items.map((item) => {
            const { name, price, description, img } = item;
            return <div>
               {name} {price} <br /> {description}
            </div>
         })}
      </ul>
   )
}

export default MenuList