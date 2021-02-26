import React, { Component } from "react"
import "../../CSS/App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Cookies from 'universal-cookie';

const cookies = new Cookies();
// firebase.initializeApp({
//   apiKey: "AIzaSyBCrdVB055-0jObg31ooDPk_F5a-MxgvN0",
//   authDomain: "pagina-personalizable.firebaseapp.com"
// })

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  llenarCookies = async (respuesta) => {
    if (respuesta != null) {
      cookies.set('email', respuesta.nombreusuario, { path: "/" });

      cookies.set('rol', "user", { path: "/" });
      cookies.set('primernombre', respuesta.displayName, { path: "/" });
      console.log("entra");
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
            {/* <div>Signed In!</div>
            <button onClick={() => this.cerrarSesion()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            {console.log("user", firebase.auth().currentUser)} */}

          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    )
  }
}

export default App