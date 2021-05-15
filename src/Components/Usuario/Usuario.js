import Button from '@material-ui/core/Button';
import React from 'react';
import Cookies from 'universal-cookie';
import AppBar from "../../Bar/AppBar";
import '../../CSS/App.css';
import Configurador from '../ConfiguradorCard/Configurador';
import ComponentUsuario from './ComponenteUsuario';
import firebase from "firebase/app";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const cookies = new Cookies();
class Usuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrar: false,
            mostrarP: false,
        }
    }
    componentDidMount = () => {
        const database = firebase.database();

        var uid = cookies.get('uid') + ""

        var rooRef = database.ref("/componenteUser/" + uid);

        rooRef.orderByChild('promedio').limitToLast(1).on('value', snapshot => {

            var newPost = snapshot.val();

            if (newPost == null) {
                console.log(newPost)
            }
            else {
                this.setState({
                    mostrarP: !this.state.mostrarP,
                })
            }
        });
    }
    irComPersonalizable = () => {
        window.location.href = "./personalizacion";
    }
    mostrarComponente = () => {
        this.setState({
            mostrar: !this.state.mostrar,
        })
    }
    mostrarComponentePersonalizado = () => {
        const database = firebase.database();

        var uid = cookies.get('uid') + ""

        var rooRef = database.ref("/componenteUser/" + uid);

        rooRef.orderByChild('promedio').limitToLast(1).on('value', snapshot => {

            var newPost = snapshot.val();

            if (newPost == null) {
                console.log(newPost)
            }
            else {
                console.log(newPost)
                var jsonString = JSON.stringify(newPost)

                var id = jsonString.substring(2, jsonString.indexOf('":{"color":"'))

                var newPostId = newPost[id]

                var cont = newPostId['contenidos']

                cookies.set('color', newPostId['color'], { path: "/" });
                cookies.set('posicionLetra', newPostId['posicionLetra'], { path: "/" });
                cookies.set('titulo', newPostId['titulo'], { path: "/" });
                cookies.set('subtitulo', newPostId['subtitulo'], { path: "/" });
                cookies.set('parrafos', newPostId['parrafos'], { path: "/" });
                cookies.set('imagen', newPostId['imagen'], { path: "/" });

                cookies.set('conimagen', cont['imagen'], { path: "/" });
                cookies.set('conparrafo1', cont['parrafo1'], { path: "/" });
                cookies.set('conparrafo2', cont['parrafo2'], { path: "/" });
                cookies.set('conparrafo3', cont['parrafo3'], { path: "/" });
                cookies.set('consubtitulo', cont['subtitulo'], { path: "/" });
                cookies.set('contitulo', cont['titulo'], { path: "/" });

                window.location.pathname = "./micomponente";
                window.location.href = "./micomponente";
            }
        });
    }
    render() {
        return (
            <div>
                {
                    !this.state.mostrar ?
                        <>
                            <AppBar />
                            <ComponentUsuario />
                            {
                                this.state.mostrarP == true ?
                                    <div className="row" style={{
                                        margin: 20,
                                        justifyContent: "center",
                                        textAlign: "center",
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <div className="col-12" >
                                            <Paper style={{
                                                margin: 20,
                                                justifyContent: "center",
                                                textAlign: "center",
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexGrow: 1,
                                                width: "100%",
                                            }}>
                                                <div class="row" style={{
                                                    margin: 20,
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexGrow: 1,
                                                    width: "50%",
                                                }}>

                                                    <div class="col-12" style={{ margin: 20, }}>
                                                        <Typography>
                                                            <h4>
                                                                Configuracion finalizada
                                                        </h4>
                                                        </Typography>
                                                    </div>
                                                    <div class="col-12" style={{ margin: 10, }}>
                                                        <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => this.mostrarComponentePersonalizado()}
                                                        >
                                                            Ver mi componente
                                                    </Button>
                                                    </div>
                                                </div>
                                            </Paper>
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                            <div className="row" style={{ margin: 20 }}>
                                <div className="col-12" >
                                    <n>
                                        Si comprendes cual es tu tarea dale al boton de iniciar para ser parte de esta gran esperiencia.
                                    </n>
                                </div>
                                <hr />
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
                                                Iniciar
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