import React from 'react';
import './CSS/App.css';
import Card from './Components/Ccard/Ccard';
import ColorFondo from './Components/Estilos/Fondo';
import Datos from './Components/Estilos/Datos';
import Posicion from './Components/Estilos/Posicion';
import TamañoLetra from "./Components/Estilos/TamanoLetra";
import moment from 'moment';
import Ccard from './Components/Ccard/Ccard';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import AppBar from "./Components/Bar/AppBar";
import InicioSesion from './Components/InicioSesion/InicioSesion';
import Admin from './Components/Admin/Admin';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iniciosesion: false,
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
        <Router>
          <Route path="/" component={() =>
            <>
              <InicioSesion />
            </>
          } />

          {
            this.state.iniciosesion == true ? <Route path="/admin" component={() =>
              <>
                <Admin />
              </>
            } /> : <Route path="/error" component={() =>
              <>
                usuario incorrecto
              </>
            } />
          }

        </Router>
      </div>
    );
  }
}
export default App;