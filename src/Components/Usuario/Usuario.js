import React from 'react';
import '../../CSS/App.css';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import Datos from '../Estilos/Datos';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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
                <Link to={"/com"}>
                    <Button>Iniciar</Button>
                </Link>
                
            </div>
        );
    }
}
export default App;