import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import CarService from './services/car-service';
import { CarstoreServiceProvider } from './components/car-service-context'
import App from './components/app';


import store from './store'


const carService = new CarService();


ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundry>
          <CarstoreServiceProvider value={carService}>
            <Router>
              <App/>
            </Router>
          </CarstoreServiceProvider>      
      </ErrorBoundry>
  </Provider>,

  document.getElementById('root')
);


