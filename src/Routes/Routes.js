import React from 'react';
import '../CSS/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InicioSesion from '../Components/InicioSesion/InicioSesion';
import Admin from '../Components/Admin/Admin';
import Usuario from '../Components/Usuario/Usuario';
import Configurador from '../Components/ConfiguradorCard/Configurador';
class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={InicioSesion}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/user" component={Usuario}/>
          <Route exact path="/personalizacion" component={Configurador}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;