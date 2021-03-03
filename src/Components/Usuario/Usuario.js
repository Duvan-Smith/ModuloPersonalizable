import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
    // componentDidMount = () => {
    //     if (cookies.get('ConfiguradorAdmin')) { return <Button color="inherit" onClick={() => this.irComPersonalizable()}>Iniciar</Button> }
    //     else { return <Button color="inherit" onClick={() => this.mostrarComponente()}>Mostrar</Button> }
    // }
    // componentDidMount = () => {
    //     this.setState({
    //         ConfiguradorAdmin: cookies.get('ConfiguradorAdmin')
    //     })
    // }
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
                            <div style={{ margin: 20 }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        Si comprendes cual es tu tarea dale al boton de iniciar para ser parte de esta gran esperiencia.
                                </Grid>
                                    <Grid item xs={3}>
                                        {
                                            // cookies.get('ConfiguradorAdmin') ?
                                            this.state.ConfiguradorAdmin ?
                                                <Button color="inherit" onClick={() => this.irComPersonalizable()}>Iniciar</Button>
                                                :
                                                <Button color="inherit" onClick={() => this.mostrarComponente()}>Mostrar</Button>
                                        }
                                    </Grid>
                                </Grid>
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