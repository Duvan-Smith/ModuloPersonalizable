import Button from '@material-ui/core/Button';
import React from 'react';
import Cookies from 'universal-cookie';
import AppBar from "../../Bar/AppBar";
import '../../CSS/App.css';
import Configurador from '../ConfiguradorCard/Configurador';
import ComponentUsuario from './ComponenteUsuario';

const cookies = new Cookies();
class Usuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrar: false,
        }
    }
    irComPersonalizable = () => {
        window.location.href = "./personalizacion";
    }
    mostrarComponente = () => {
        this.setState({
            mostrar: !this.state.mostrar,
        })
    }
    render() {
        return (
            <div>
                {
                    !this.state.mostrar ?
                        <>
                            <AppBar />
                            <ComponentUsuario />
                            <div className="row" style={{ margin: 20 }}>
                                <div className="col-12" >
                                    Si comprendes cual es tu tarea dale al boton de iniciar para ser parte de esta gran esperiencia.
                                </div>
                                <hr/>
                                <div className="col-12" >
                                        {
                                            cookies.get('ActivoConfigurador') ?
                                                <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => this.irComPersonalizable()}
                                                    >
                                                        Iniciar
                                                </Button>
                                                :
                                                <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => this.mostrarComponente()}
                                                    >
                                                        Mostrar
                                                </Button>
                                        }
                                </div>
                            </div>
                        </>
                        :
                        <Configurador />
                }
            </div>
        );
    }
}
export default Usuario;