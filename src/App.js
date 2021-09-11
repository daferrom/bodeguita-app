import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeView from './components/HomeView/HomeView'
import ProductsView from './components/ProductsView/ProductsView';
import Footer from "./components/Footer/Footer"
import Cart from './components/Cart/Cart'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.css'
import { Context } from './context/context';
import { shoppingInitialState } from './components/ShoppingCart/ShoppingCartReducers';
import MyProvider from './components/application/provider';


function App() {
  let dataContext ={
    shoppingInitialState
  }
  return (
    <MyProvider>
    <Context.Provider value={dataContext}>
      <Router>
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
          <Footer/>
      </div>
    </Router> 
    </Context.Provider>
    </MyProvider>
  );
}

export default App;
