import React from 'react';
import './CSS/App.css';
import Card from './Components/Card/Card';
import ColorFondo from './Components/Estilos/Fondo';
import TamañoLetra from "./Components/Estilos/TamanoLetra";
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ccolor: 0,
      count: 0,
      county: 0,
      countz: 0,
      contenidos: [
        {
          titulo: "Prueba",
          parrafo1: "Descripcion cualquiera",
          subtitulo: "sub",
          parrafo2: "Descripcion cualquiera2",
          posicion: "center",
          colorfondo: "#ECFF33",
          colorletra: "#030303",
          letratipo: "",
          tamañosubtitulo: "subtitle1",
          tamañotitulo: "h1",
          tamañoparrafos: "body1",
          imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
        },
        {
          titulo: "Prueba2",
          parrafo1: "Descripcion cualquiera",
          subtitulo: "sub",
          parrafo2: "Descripcion cualquiera2",
          posicion: "center",
          colorfondo: "#3396FF",
          colorletra: "#030303",
          letratipo: "",
          tamañosubtitulo: "subtitle2",
          tamañotitulo: "h1",
          tamañoparrafos: "body2",
          imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
        },
        {
          titulo: "Prueba3",
          parrafo1: "Descripcion cualquiera",
          subtitulo: "sub",
          parrafo2: "Descripcion cualquiera2",
          posicion: "center",
          colorfondo: "#FF3346",
          colorletra: "#030303",
          letratipo: "",
          tamañosubtitulo: "subtitle2",
          tamañotitulo: "h1",
          tamañoparrafos: "body2",
          imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
        },
      ],
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
      <div >
        <header
        >
          {
            this.state.cFondoSeleccionada >= 21 ?
              this.state.tLetraSeleccionada >= 21 ?
                <>
                  fin
              </>
                :
                <>
                  <TamañoLetra
                    seleccionarTLetra={this.seleccionarTLetra}
                  />
                </>
              :
              <>
                <ColorFondo
                  seleccionarCFondo={this.seleccionarCFondo}
                />
              </>
          }
        </header>
      </div>
    );
  }
}
export default App;
