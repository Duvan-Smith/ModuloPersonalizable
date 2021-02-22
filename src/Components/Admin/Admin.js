import React from 'react';
import '../../CSS/App.css';
import Card from '../Ccard/Ccard';
import ColorFondo from '../Estilos/Fondo';
import Datos from '../Estilos/Datos';
import Posicion from '../Estilos/Posicion';
import TamañoLetra from "../Estilos/TamanoLetra";
import moment from 'moment';
import Ccard from '../Ccard/Ccard';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import AppBar from "../Bar/AppBar";
import InicioSesion from '../InicioSesion/InicioSesion';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  seleccionarCFondo = (cfondo) => {
    this.setState({ cFondoSeleccionada: cfondo })
  }
  seleccionarTLetra = (tletra) => {
    this.setState({ tLetraSeleccionada: tletra })
  }
  render() {
    return (
      <div className="Margen">
          <Route path="/admin" component={() =>
            <>
              <AppBar />
            </>
          } />
          <br />
          <Route path="/usuario" component={() =>
            <>
              <Datos />
            </>
          } />
      </div>
    );
  }
}
export default App;