import React, { Component } from 'react'
import Tea from './Tea'
import StyleSheet from '../styles/Menu.module.css'
import MenuList from './MenuList'

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
         <div className={StyleSheet.menuDiv}>
            <div>Menu</div>
               <button onClick={this.customHandler}>Make your own cup of tea!</button>
               {this.state.custom ? <Tea /> : null}
            <br />
            <div className='listOfItems'>
            <MenuList />
            </div>   
         </div>
      )
   }
}

export default Menu