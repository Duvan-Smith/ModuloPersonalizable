import React from 'react';
import './CSS/App.css';
import Card from './Components/Ccard/Ccard';
import ColorFondo from './Components/Estilos/Fondo';
import Datos from './Components/Estilos/Datos';
import Posicion from './Components/Estilos/Posicion';
import TamañoLetra from "./Components/Estilos/TamanoLetra";
import moment from 'moment';
import Ccard from './Components/Ccard/Ccard';

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
        <Datos/>
      </div>
    );
  }
}
export default App;