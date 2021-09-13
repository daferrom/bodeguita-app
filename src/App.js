import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeView from './components/HomeView/HomeView'
import ProductsView from './components/ProductsView/ProductsView';
import Cart from './components/Cart/Cart'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.css'
import { products, cart } from './components/ShoppingCart/ShoppingCartReducers';
import Context from './Context/Context';
import MyProvider from './components/application/provider';
import { state} from './components/ShoppingCart/ShoppingCart'

function App() {
  const dataContext = {Context}

  return (
    <MyProvider>
    <Context.Provider value={dataContext}>
      <Router basename={process.env.PUBLIC_URL}>
      <div className='container'>
            <Switch>
              <Route path = "/" exact>
                <HomeView />           
              </Route>
              <Route path = "/productos">
                <ProductsView />
              </Route>
              <Route path = "/carrito">
                <Cart />
              </Route>
              <Route path = "/cart">
                <ShoppingCart />
              </Route>
            </Switch>
      </div>
    </Router> 
    </Context.Provider>
    </MyProvider>
  );
}

export default App;
