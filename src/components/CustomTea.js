import React, { Component } from 'react'
import style from '../styles/CustomTea.module.css'

class CustomTea extends Component {
   constructor(props) {
      super(props)
      this.state = {
         tea: {
            custom: true,
            type: '',
            size: '',
            flavor: '',
            bubbles: false,
            milk: false,
         },     
         teas: [],
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
            custom: true,
            type: '',
            size: '',
            flavor: '',
            bubbles: false,
            milk: false,
         },
      })
      this.props.addToCart(this.state.tea);
      e.preventDefault()
   }
   render() {
      return (
         <div className={style.TeaDiv}>
            <form onSubmit={this.submitForm} className={style.customForm}>
               <div>
                  <label htmlFor='type'>Type of Tea: </label>
                  <select name='type' id="type" value={this.state.tea.type} required onChange={this.handleChange}>
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
                  <select name="size" id="size" value={this.state.tea.size} required onChange={this.handleChange}>
                     <option></option>
                     <option value="Small">Small</option>
                     <option value="Medium">Medium</option>
                     <option value="Large">Large</option>
                  </select>
               </div>
               <div>
                  <label htmlFor='flavor'>Add Flavor: </label>
                  <select name="flavor" id="flavor" value={this.state.tea.flavor} onChange={this.handleChange}>
                     <option value="None"></option>
                     <option value="Lemon">Lemon</option>
                     <option value="Lavender">Lavender</option>
                     <option value="Lime">Lime</option>
                     <option value="Mango">Mango</option>
                     <option value="Honeydew">Honeydew</option>
                     <option value="Raspberry">Raspberry</option>
                     <option value="Peach">Peach</option>
                  </select>
               </div>
               <div>
                  <label htmlFor="bubbles">Add Bubbles</label>
                  <input type="checkbox" name="bubbles" id="bubbles" value={this.state.tea.bubbles} onChange={this.handleChange}></input>
               </div>
               <div>
                  <label htmlFor="milk">Add Sweetened Condensed Milk</label>
                  <input type="checkbox" name="milk" id="milk" value={this.state.tea.bubbles} onChange={this.handleChange}></input>
               </div>
               <div>
                  <button type="submit" className={style.customAddToCart}>Add to Cart</button>
               </div>
            </form>
            <br />
         </div>
      )
   }
}

export default CustomTea
