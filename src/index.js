import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //importamos nuestro componente
import reportWebVitals from './reportWebVitals';

ReactDOM.render( //elemento a renderizar y donde lo va a renderizar
  <React.StrictMode><App /></React.StrictMode>, //elemente de react a renderizar
  document.getElementById('root') //lugar donde se va a renderizar
);

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: ReportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();