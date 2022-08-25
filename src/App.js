import './styles/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { useState } from 'react'

/*
The components have the following structure:

App
  -Header
  -Menu
    -MenuList
      -MenuMap
  -Cart
    -CartMap

MenuMap contains the .map method that renders each menu item in the array.
CartMap similarly renders the items that have been added to the cart.
The Cart component contains the Cart button.  When the button is clicked, the Cart box
appears and displays all items in the cart.

cartItems is the array containing all items currently in the cart, both menu items
and custom items.  This is passed down as props throughout the page: to the Menu side
where items are added to the cart, and the Cart side, where the items are rendered.
*/

function App() {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (item) => {
    setCartItems([...cartItems, {...item}])

  }
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((x) => x !== item));
  }

  return (
    <div className='App'>
        <Header />
        <div className='menuAndCart'>
          <Menu addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
    </div>
  );
}

export default App;