import React from 'react';
import ReactDOM from 'react-dom';
import LoginProvider from "./context/LoginContext";
import BioProvider from "./context/BioContext";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <BioProvider>
        <App />
      </BioProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
