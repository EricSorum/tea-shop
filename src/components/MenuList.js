import React, { Component } from 'react'
import MenuMap from './MenuMap'
import arnie from './images/arnie.jpg'
import southern from './images/southern.jpg'
import peach from './images/peach.jpg' 
import honeydew from './images/honeydew.jpg'
import moo from './images/moo.jpg'
import blue from './images/blue.jpg'
/*
MenuList.js contains the list of menu items.  The 
*/
class MenuList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         id: 1,
         /* 
         items is the list contained in the menu.  items is passed down to MenuMap.js
         where each item is rendered.
         */
         items: [
            {
              name: 'Arnie Palmer',
              description: 'Half black tea, half fresh-made lemonade!',
              img: arnie,
              size: 'Small',
            },
            {
               name: 'Southern Sweet',
               description: 'Made the right way... by adding the sugar before the tea!',
               img: southern,
               size: 'Small',
            },
            {
               name: 'Peach Tree',
               description: 'Green tea with peach syrup and tapioca bubbles.',
               img: peach,
               size: 'Small',
            },
            {
               name: 'Honeydew Pistachio',
               description: 'A local favorite - blended with green tea, ripe melon and pistachios with tapioca bubbles.',
               img: honeydew,
               size: 'Small',
            },
            {
               name: 'Big Moo',
               description: 'Black tea with a generous amount of sugar, cream, and bubbles.',
               img: moo,
               size: 'Small',
            },
            {
               name: 'Blueberry Mint',
               description: 'Sweetened condensed milk with blueberry puree make this herbal tea especially soothing.',
               img: blue,
               size: 'Small',
            }
         ]
      } 
    
   }
   render() {
      const { items } = this.state
      return (
         <div>
            <MenuMap items={items} addToCart={this.props.addToCart}/>
         </div>
      )
   }
}

export default MenuList