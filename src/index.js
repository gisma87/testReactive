import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
