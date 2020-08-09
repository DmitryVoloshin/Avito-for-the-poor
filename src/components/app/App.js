import React from 'react';
import Header from '../header';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';


const App = () => {

  return <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/cart" component={CartPage}/>
      </Switch>
  </div>
}


export default App;
