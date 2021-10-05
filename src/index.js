import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const movements = [
  {
    id: 1,
    concepto: 'Bono vacacional',
    monto: 15000
  },
  {
    id: 2,
    concepto: 'Retiro cajero',
    monto: 10000
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App key={movements.id} movements={movements}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
