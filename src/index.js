import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { AppProvider } from './Context/Context';
import { BookProvider } from './Context/BookReqContext';


ReactDOM.render(
   <AppProvider>
      <BookProvider>
   <BrowserRouter>
      <App/>  
   </BrowserRouter>
   </BookProvider>
   </AppProvider>,

   document.getElementById('root')
);
