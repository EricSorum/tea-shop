import React, { Component } from 'react'
import uniqid from 'uniqid'
import CustomList from './CustomList'
import style from '../styles/OrderForm.module.css'

class Tea extends Component {
   constructor(props) {
      super(props)
      this.state = {
         tea: {
            num: 1,
            name: '',
            type: 'Ginger',
            size: 'Large',
            syrup: 'lemon',
            bubbles: false,
            milk: false,
            temp: 'Iced',
            id: uniqid()
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
            name: '',
            type: '',
            size: '',
            flavor: '',
            bubbles: false,
            milk: false,
            id: uniqid()
         },
      })
      e.preventDefault()
   } 
   render() {
      return (
         <div>
            <div className={style.FormDiv}>
               <form onSubmit={this.submitForm}>
                  <h1>Custom tea form:</h1>
                  <div>
                     <label htmlFor='name'>Name your custom tea:</label>
                     <input name='name' value={this.state.tea.name} required onChange={this.handleChange}></input>
                  </div>
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
                     <button type="submit">Add to Menu</button>
                  </div>
               </form>
               <br />
            </div>
            <div className="CustomList">
               <CustomList teas={this.state.teas}/>
            </div>
         </div>
      )
   }
}

export default Tea