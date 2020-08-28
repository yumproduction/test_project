import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

import './../src/scss/components/common.scss'

import FoodContainer from './components/Food/FoodContainer';

function App() {
  return <Provider store ={store}>
    <FoodContainer />
  </Provider>
}

export default App;
