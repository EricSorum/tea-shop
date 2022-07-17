import './styles/App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <div className='menuAndCart'>
          <Menu />
          <Cart />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
