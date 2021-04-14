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
            ConfiguradorAdmin: cookies.get('ConfiguradorAdmin'),
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
    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar las props):
        if (this.state.ConfiguradorAdmin !== cookies.get('ConfiguradorAdmin')) {
            this.setState({
                ConfiguradorAdmin: cookies.get('ConfiguradorAdmin')
            })
        }
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
                                            this.state.ConfiguradorAdmin ?
                                                <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => this.iniciarDemo()}
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