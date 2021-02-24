import React from 'react';
import '../../CSS/App.css';
import Datos from '../Estilos/Datos';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import AppBar from "../Bar/AppBar";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    if(!cookies.get('nombreusuario')){
        window.location.href="./";
    }
  }
  render() {
    console.log(cookies.get('id'));
    console.log(cookies.get('nombreusuario'));
    console.log(cookies.get('rol'));
    console.log(cookies.get('fechacreacion'));
    console.log(cookies.get('primernombre'));
    console.log(cookies.get('primerapellido'));
    return (
      <div className="Margen">
        <AppBar/>
        admin
      </div>
    );
  }
}
export default Admin;