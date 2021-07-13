import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Formulario from './components/Formulario';
import Hello from './components/Hello';



ReactDOM.render(
  <React.StrictMode>    
    <Hello text="Olá Lets" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

