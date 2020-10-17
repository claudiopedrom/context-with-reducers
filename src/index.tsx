import React from 'react';
import ReactDOM from 'react-dom';
import LoginProvider from "./context/LoginContext";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
