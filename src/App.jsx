
import './App.css';
import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart';
import NavBar from './componentes/NavBar';
import  ItemDetailContainer  from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';

export const CartContext = React.createContext('');
console.log('CartContext: ', CartContext);

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
   
    <Routes>
      <Route  path='/' element={<ItemListContainer />} />
      <Route  path='/categoria/:categoriaId' element={<ItemListContainer />} />
      <Route  path='/cart' element={<Cart />} />
      <Route  path='/detalle/:detalleId' element={<ItemDetailContainer /> } />
    </Routes>
    
    </BrowserRouter>
   
    </>
  );
}

export default App;
