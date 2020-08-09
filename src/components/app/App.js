import React from 'react';
import Header from '../header';
import {Route} from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';


const App = () => {

  return <div>
      <Header/>
        <Route path="/" component={HomePage} exact/>
        <Route path="/cart" component={CartPage}/>
  </div>
}


export default App;
