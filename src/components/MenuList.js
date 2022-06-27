import React, { Component } from 'react'
import MenuItem from './MenuItem'
import arnie from './images/arnie.jpg'
import southern from './images/southern.jpg'
import peach from './images/peach.jpg' 
import honeydew from './images/honeydew.jpg'
import moo from './images/moo.jpg'


class MenuList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         items: [
            {
              id: 1, 
              name: 'Arnie Palmer',
              description: 'Half black tea, half fresh-made lemonade!',
              price: '$4.99',
              img: arnie,
            },
            {
               id: 3,
               name: 'Southern Sweet',
               description: 'Made the right way... by adding the sugar first!',
               price: '$4.99',
               img: southern,
            },
            {
               id: 4,
               name: 'Peach Tree',
               description: 'Green tea with peach syrup and tapioca bubbles.',
               price: '$6.99',
               img: peach,
            },
            {
               id: 5,
               name: 'Honeydew Pistachio',
               description: 'A local favorite - blended with green tea, ripe melon and pistachios with tapioca bubbles.',
               price: '$6.99',
               img: honeydew,
            },
            {
               id: 6,
               name: 'Big Moo',
               description: 'Black tea with a generous amount of sugar, cream, and bubbles.',
               price: '$6.99',
               img: moo,
            }
         ]
      } 
    
   }
   render() {
      const { items } = this.state
      return (
         <div>
            <div></div>
            <MenuItem items={items}/>

         </div>
      )
   }
}

export default MenuList