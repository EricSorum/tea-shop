import React from 'react'
import style from '../styles/CartItem.module.css'

const CartMap = (props) => {
   const { items, removeFromCart } = props
   function renderPrice(size) {
      switch (size) {
         case 'Small':
            return '$3.99';
            break;
         case 'Medium':
            return '$4.99';
            break;
         case 'Large':
            return '$5.99';
         default:
            return null;
      } 
   }

      return (
      <ul className={style.Ul}>
         {items.map((item) => {
            
            if (item.custom) {
               const {size, type, flavor, bubbles, milk} = item;
               return <div key={Math.floor(Math.random() * 10000)} className={style.Grid}>
                        <div className={style.A}>
                           <div className={style.Name}>{type} Tea</div>
                              
                              <div className={style.Flavors}>
                                 {flavor || bubbles || milk ? <span className={style.Flavors}>Add: </span>: null}
                                 {flavor ? <span className={style.Flavors}>{flavor}</span> : null}
                                 {bubbles ? <span className={style.Flavors}>, Bubbles</span> : null}
                                 {milk ? <span className={style.Flavors}>, Milk</span> : null}
                              </div>
                           <div className={style.Size}>Size: {size}</div>
                           <div className={style.Price}>{renderPrice(size)}</div>
                        </div>
                        <div className={style.D}>
                           <div><button className={style.removeButton} onClick={() => removeFromCart(item)}>Remove</button></div>
                        </div>
                     </div>
               } else {
               const { name, size } = item;
               return <div key={Math.floor(Math.random() * 10000)} className={style.Grid}>
                        <div className={style.A}>
                           <div className={style.Name}>{name}</div>
                           <div className={style.Size}>Size: {size}</div>
                           <div className={style.Price}>{renderPrice(size)}</div>
                        </div>
                        <div className={style.D}>
                           <div><button className={style.removeButton} onClick={() => removeFromCart(item)}>Remove</button></div>
                        </div>
                     </div>
               }
            })
         }
      </ul>
   )
}

export default CartMap