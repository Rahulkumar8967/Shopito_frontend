import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import {store} from './State/store.js'
// product data not add on website error  backend work  but frontend not work
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
         <App />
    </Provider>
     
    </BrowserRouter> 
  
  </React.StrictMode>
);

reportWebVitals();

// start 2:05 h
