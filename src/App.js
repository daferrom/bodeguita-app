import React from 'react'
import HomeView from './components/HomeView/HomeView'
/*import ProductsView from './components/ProductsView/ProductsView';*/
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <HomeView/>
      
      {/*<ProductsView />*/}
      <Footer/>
    </div>
  );
}

export default App;
