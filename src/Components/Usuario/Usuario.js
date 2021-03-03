import Button from '@material-ui/core/Button';
import React from 'react';
import AppBar from "../../Bar/AppBar";
import '../../CSS/App.css';
// import Configurador from '../ConfiguradorCard/Configurador';
import ComponentUsuario from './ComponenteUsuario';
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
            <div>
                <AppBar />
                <ComponentUsuario />
                <Button color="inherit" onClick={() => this.irComPersonalizable()}>Iniciar</Button>
                {/* <Configurador /> */}
            </div>
        );
    }
}
export default Usuario;