import './styles/App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <div className='menuAndCart'>
      <Menu />
      <Cart />
      </div>
    </div>
  );
}

export default App;
