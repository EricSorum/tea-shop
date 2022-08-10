
/*

Build-your-own Ice Tea (Unfished feature)

import React, { Component } from 'react'
import Order from './Order'
import style from '../styles/Tea.module.css'

class CustomTea extends Component {
   constructor(props) {
      super(props)
      this.state = {
         tea: {
            num: 1,
            type: 'Ginger',
            size: 'Large',
            syrup: 'lemon',
            bubbles: false,
            milk: false,
            temp: 'Iced',
         },     
         teas: []
      }
   }   
   handleChange = e => {
      this.setState({
         ...this.state,
         tea: {...this.state.tea, [e.target.name]: e.target.value}
      })
   }
   submitForm = e => {
      this.setState({
         teas: this.state.teas.concat(this.state.tea),
         tea: {
            num: this.state.tea.num + 1,
            type: '',
            size: '',
            flavor: '',
            bubbles: false,
            milk: false,
         },
      })
      e.preventDefault()
   } 
   render() {
      return (
         <div className={style.TeaDiv}>
            <form onSubmit={this.submitForm}>
               <h1>Tea order form</h1>
               <div>
                  <label htmlFor='type'>Type of Tea: </label>
                  <select name='type' value={this.state.tea.type} required onChange={this.handleChange}>
                     <option></option>
                     <option value="Ginger">Ginger</option>
                     <option value="Mint">Mint</option>
                     <option value="Macha">Macha</option>
                     <option value="Oolong">Oolong</option>
                     <option value="Green">Green</option>
                     <option value="Black">Black</option>
                  </select>
               </div>
               <div>
                  <label htmlFor='size'>Size: </label>
                  <select type="select" name="size" value={this.state.tea.size} required onChange={this.handleChange}>
                     <option></option>
                     <option value="Small">Small</option>
                     <option value="Medium">Medium</option>
                     <option value="Large">Large</option>
                  </select>
               </div>
               <div>
                  <label htmlFor='flavor'>Flavor: </label>
                  <select type="select" name="syrup" value={this.state.tea.flavor} onChange={this.handleChange}>
                     <option value="None"></option>
                     <option value="Lemon">Lemon</option>
                     <option value="Lavender">Lavender</option>
                     <option value="Lime">Lime</option>
                     <option value="Mango">Mango</option>
                  </select>
               </div>
               <div>
                  <label htmlFor="bubbles">Add Bubbles</label>
                  <input type="checkbox" name="bubbles" value={this.state.tea.bubbles} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label htmlFor="milk">Add Sweetened Condensed Milk</label>
                  <input type="checkbox" name="milk" value={this.state.tea.bubbles} onChange={this.handleChange}></input>
               </div>
               <div>
                  <button type="submit">Submit</button>
               </div>
            </form>
            <br />
            <Order teas={this.state.teas}/>
         </div>
      )
   }
}

export default CustomTea
*/