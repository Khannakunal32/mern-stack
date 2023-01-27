
import React from 'react';
// ****** 1 reactDom.render is deprecated in react 18 
// (2) use ReactDom.createRoot instead 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// (3) in react 17
// ReactDOM.render(
//     <App />
//   ,
//   document.getElementById('root')
// );
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// (4) Go to expenses.js 
