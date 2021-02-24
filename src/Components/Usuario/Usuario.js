import React from 'react';
import '../../CSS/App.css';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import Datos from '../Estilos/Datos';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import AppBar from "../Bar/AppBar";

class Usuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    irComPersonalizable = () => {
        window.location.href = "./personalizacion";
    }
    render() {
        return (
            <div className="Margen">
                <AppBar/>
                <Button color="inherit" onClick={() => this.irComPersonalizable()}>Iniciar</Button>
            </div>
        );
    }
}
export default Usuario;