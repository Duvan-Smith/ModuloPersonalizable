import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes';
import firebase from "firebase"
firebase.initializeApp({
  apiKey: "AIzaSyBCrdVB055-0jObg31ooDPk_F5a-MxgvN0",
  authDomain: "pagina-personalizable.firebaseapp.com"
})
ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);