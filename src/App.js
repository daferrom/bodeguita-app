import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,  
} from "react-router-dom";
import HomeView from './components/HomeView/HomeView'
import ProductsView from './components/ProductsView/ProductsView';
import Footer from "./components/Footer/Footer"
import Cart from './components/Cart/Cart'
import './App.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <div className="btn-group">
          <Link to= "/inicio" className="btn btn-dark">
            Inicio 
          </Link>
        </div> 
            <Switch>
              <Route path = "/inicio" exact>
                <HomeView />
              </Route>
              <Route path = "/productos">
                <ProductsView />
              </Route>
              <Route path = "/carrito">
                <Cart />
              </Route>
            </Switch>
          <Footer/>
      </div>
    </Router> 
  );
}

export default App;
