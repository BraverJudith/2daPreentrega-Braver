import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { NavBar } from './components/NavBar';
import { useEffect } from 'react';
import {getFirestore, getDoc, doc } from "firebase/firestore";
import { CartProvider } from './context/CartContext';


function App() {
  useEffect (() => {
    const db = getFirestore();

  })
  return (
    <div className="App">
      <BrowserRouter>
          <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:id' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='*' element={404}/> 
            </Routes>
          </CartProvider>        
      </BrowserRouter>
    </div>
  );
}

export default App;