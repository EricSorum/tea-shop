import React from 'react'
import style from '../styles/CartItem.module.css'
/*
This component renders the list of items in the Cart.
Each item added to the cart, whether from the menu or the custom form,
is added to the "items" array in App.js.  "items" is then passed down
to Cart.js and then to CartMap.
*/
const CartMap = (props) => {
   const { items, removeFromCart } = props
   // renderPrice determines which price to display based on the size of the item.
   function renderPrice(size) {
      switch (size) {
         case 'Small':
            return '$3.99';
            break; // ESLint warning for unreachable code... seems acceptable in this case.
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
            /*
            Custom items are rendered first, filtered out through the "custom" key.
            */
            if (item.custom) {
               const {size, type, flavor} = item;
               // The .random() method is used to generate a unique key for each child.
               return <div key={Math.floor(Math.random() * 10000)} className={style.Grid}>
                        <div className={style.A}>
                           <div className={style.Name}>{type} Tea</div>
                              <div className={style.Flavors}>
                                 {flavor ? <span className={style.Flavors}>Add: </span>: null}
                                 {flavor ? <span className={style.Flavors}>{flavor}</span> : null}
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