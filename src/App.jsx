
import './App.css';

import NavBar from './componentes/NavBar';
import  ItemDetailContainer  from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Cart from './componentes/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route  path='/' element={<ItemListContainer />} />
      <Route  path='/categoria' element={<ItemListContainer />} />
      <Route  path='/Cart' element={<Cart />} />
      <Route  path='/' element={<ItemDetailContainer /> } />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
