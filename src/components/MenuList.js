import React, { Component } from 'react'
import MenuItem from './MenuItem'


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
              img: ''
            },
            {
               id: 2, 
               name: 'Classic Thai',
               description: 'Strong green tea mixed with sweetened condensed milk.',
               price: '$6.99',
               img: ''
            },
            {
               name: 'Southern Sweet',
               description: 'Made the right way... by adding the sugar first!',
               price: '$4.99',
               img: ''
            },
            {
               name: 'Macha Bubble',
               description: 'Lightly sweetened macha tea with tapioca bubbles.',
               price: '$6.99',
               img: ''
            },
            {
               name: 'Peach Tree',
               description: 'Green tea with peach syrup and tapioca bubbles.',
               price: '$6.99',
               img: '',
            },
            {
               name: 'Honeydew Pistachio',
               description: 'A local favorite - blended with green tea, ripe melon and pistachios with tapioca bubbles.',
               price: '$6.99',
               img: '',
            },
            {
               name: 'Big Moo',
               description: 'Black tea with a generous amount of sugar, cream, and bubbles.',
               price: '$6.99',
               img: '',
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