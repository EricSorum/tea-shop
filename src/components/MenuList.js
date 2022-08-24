import React, { Component } from 'react'
import MenuMap from './MenuMap'
import arnie from './images/arnie.jpg'
import southern from './images/southern.jpg'
import peach from './images/peach.jpg' 
import honeydew from './images/honeydew.jpg'
import moo from './images/moo.jpg'


class MenuList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         id: 1,
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