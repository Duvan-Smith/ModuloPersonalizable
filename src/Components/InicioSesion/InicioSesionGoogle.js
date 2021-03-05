import firebase from "firebase";
import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Cookies from 'universal-cookie';
import "../../CSS/App.css";

const cookies = new Cookies();
class InicioSesionGoogle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            nombre: "",
            foto: "",
            rows: [],
            isSignedIn: false,
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
                signInSuccess: () => false
            },
        }
    }
    componentDidMount = () => {
        if (cookies.get('estadosesion')) {
            firebase.auth().signOut()
            cookies.remove('estadosesion', { path: "/" })
            cookies.remove('cTamano', { path: "/" });
            cookies.remove('cPosicion', { path: "/" });
            cookies.remove('cPosicion2', { path: "/" });
            cookies.remove('cColor', { path: "/" });
            cookies.remove('cContenido', { path: "/" });
        }
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }
    llenarCookies = async (respuesta) => {
        if (respuesta != null) {
            cookies.set('email', respuesta.nombreusuario, { path: "/" });
            cookies.set('rol', "user", { path: "/" });
            cookies.set('primernombre', respuesta.displayName, { path: "/" });
            cookies.set('Avatar', respuesta.photoURL, { path: "/" });
            cookies.set('signin', respuesta.providerId, { path: "/" });
            cookies.set('uid', respuesta.uid, { path: "/" });
            alert(`Bienvenido ${respuesta.displayName}`)
            window.location.href = "./user";
        }
    }
    cerrarSesion = async () => {
        firebase.auth().signOut()
    }
    render() {
        return (
            <div className="App">
                ¿Ya tienes tu casco pusto?, entonces que esperas ingresa con toda seguridad.
                {this.state.isSignedIn ? (
                    <span>
                        {this.llenarCookies(firebase.auth().currentUser)}
                    </span>
                ) : (
                        <StyledFirebaseAuth
                            uiConfig={this.state}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
            </div>
        )
    }
}
export default InicioSesionGoogle