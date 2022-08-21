//// login: msemerni
//// password: 123

//// login: 1122@mail.ru
//// password: 1122
import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './utils/history';
import store from './reducers/store';
import actionAuthLogin from './actions/actionAuthLogin';
import CHeader from './components/Header';
import Content from './components/Content';

if (localStorage.authToken) {
  store.dispatch(actionAuthLogin(localStorage.authToken))
}

const App = () =>
  <Router history={history}>
    <Provider store={store}>
      <CHeader />
      <Content />
    </Provider>
  </Router>

export default App;
