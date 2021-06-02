import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import './_base.scss'
import store from './redux-store/store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <Router>
          <App />
      </Router>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

