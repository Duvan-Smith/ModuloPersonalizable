import Button from '@material-ui/core/Button';
import React from 'react';
import AppBar from "../../Bar/AppBar";
import '../../CSS/App.css';
import Configurador from '../ConfiguradorCard/Configurador';
import ComponentUsuario from './ComponenteUsuario';
class Usuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrar:false,
        }
    }
    irComPersonalizable = () => {
        window.location.href = "./personalizacion";
    }
    mostrarComponente = () =>{
        this.setState({
            mostrar:!this.state.mostrar,
        })
    }
    render() {
        return (
            <div>
                {
                    !this.state.mostrar?
                        <>
                        <AppBar />
                        <ComponentUsuario />
                        <Button color="inherit" onClick={() => this.irComPersonalizable()}>Iniciar</Button>
                        <Button color="inherit" onClick={() => this.mostrarComponente()}>Mostrar</Button>
                        </>
                    :
                        <Configurador/>
                }
            </div>
        );
    }
}
export default Usuario;