import React from 'react'
import styles from '../styles/Order.module.css'

const Order = (props) => {
   const { teas } = props
   return (
      <ul className={styles.order}>
         {teas.map((tea) => {
            return (
               <div key={tea.id}>
                  <h3>{tea.num} {tea.type} Tea</h3>
                  <div>Size: {tea.size}</div>
                  <div>Flavor: {tea.syrup}</div>
                  {tea.bubbles && <div>with Bubbles</div>}
                  {tea.milk && <div>with Sweetened Condensed Milk</div>}
               </div>
               )
            }
         )}
      </ul>
   )
}

export default Order