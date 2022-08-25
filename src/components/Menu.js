import React, { Component } from 'react'
import CustomTea from './CustomTea'
import style from '../styles/Menu.module.css'
import MenuList from './MenuList'
/*
Menu.js is the parent of MenuList and MenuMap, which render on the left
side of the page.  Menu.js also contains the "Make your own cup of tea" button,
which renders the CustomTea form.
*/
class Menu extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        custom: false,
     }
     this.customHandler = () => this.setState({custom: !this.state.custom})
   }
   render() {
      return (
         <div className={style.menuDiv}>
            <h2>Menu</h2>
               <button onClick={this.customHandler} className={style.customButton}>Make your own cup of tea!</button>
               {this.state.custom ? <CustomTea addToCart={this.props.addToCart}/> : null}
            <br />
            <div className='listOfItems'>
            <MenuList addToCart={this.props.addToCart}/>
            </div>   
         </div>
      )
   }
}

export default Menu