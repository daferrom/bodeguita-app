import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeView from './components/HomeView/HomeView'
import ProductsView from './components/ProductsView/ProductsView';
import Footer from "./components/Footer/Footer"
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
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
            </Switch>
          {/*<HomeView/>        
          <ProductsView />*/}
          <Footer/>
        </div>
      </div>
    </Router> 
  );
}

export default App;
