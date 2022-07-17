import './styles/App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (item) => {
    setCartItems([...cartItems, {...item}])

  }
  const removeFromCart = (item) => {
    console.log("remove from cart")
    setCartItems(cartItems.filter((x) => x.id !== item.id))
  }
  return (
    <div className="App">
        <div className='menuAndCart'>
          <Menu addToCart={addToCart} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>
    </div>
  );
}

export default App;

// create a simple function in App and pass it down as a prop to Menu and Cart