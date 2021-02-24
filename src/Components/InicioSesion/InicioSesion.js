import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';


const baseUrl = "http://localhost:3001/usuario"
const cookies = new Cookies();
toast.configure()

class InicioSesion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        nombreusuario: "",
        contrasena: "",
        rol: "admin",
        fechacreacion: moment().format("DD-MM-YYYY hh:mm:ss"),
      }
    }
  }
  Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }
  iniciarSesion = async () => {
    await axios.get(baseUrl, { params: { nombreusuario: this.state.form.nombreusuario, contrasena: md5(this.state.form.contrasena) } })
      .then(response => {
        return response.data;
      })
      .then(response => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set('id', respuesta.id, { path: "/" });
          cookies.set('nombreusuario', respuesta.nombreusuario, { path: "/" });
          cookies.set('rol', respuesta.rol, { path: "/" });
          cookies.set('fechacreacion', respuesta.fechacreacion, { path: "/" });
          cookies.set('primernombre', respuesta.primernombre, { path: "/" });
          cookies.set('primerapellido', respuesta.primerapellido, { path: "/" });
          console.log("entra");
          alert(`Bienvenido ${respuesta.primernombre}`)
          if (respuesta.rol == "admin") {
            window.location.href = "./admin";
          } else {
            window.location.href = "./user";
          }
          //#region Error
          // toast("Bienvenido "+respuesta.primernombre,
          //   {
          //     position: toast.POSITION.TOP_CENTER,
          //     autoClose: 3000,
          //   });
          //#endregion
        } else {
          alert("El usuario o la contraseña no son correctos")
          //#region Error
          // toast("El usuario o la contraseña no son correctos",
          //   {
          //     position: toast.POSITION.TOP_CENTER,
          //     autoClose: 3000,
          //   });
          //#endregion
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  componentDidMount() {
    if (cookies.get('nombreusuario')) {
      if (cookies.get('rol') == "admin") {
        window.location.href = "./admin";
      } else {
        window.location.href = "./user";
      }
    }
  }
  render() {
    return (
      <Container component="main" maxWidth="xs"
        style={{
          justifyContent: "center",
          textAlign: "center",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 100
        }}
      >
        <CssBaseline />
        <div>
          <Avatar >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesion
        </Typography>
          {/* <form noValidate> */}
          <TextField
            type="text"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombreusuario"
            label="Correo electronico"
            name="nombreusuario"
            autoComplete="email"
            autoFocus
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contrasena"
            label="Contraseña"
            type="password"
            id="contrasena"
            autoComplete="current-password"
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.iniciarSesion()}
          >
            Iniciar Sesion
            </Button>
          {
            //#region Crear cuenta
            // <Grid container>
            //   <Grid item xs>
            //     <Link to="#" variant="body2">
            //       ¿Se te olvidó tu contraseña?
            //   </Link>
            //   </Grid>
            //   <Grid item>
            //     <Link href="#" variant="body2">
            //       {"¿No tienes una cuenta? Regístrate"}
            //     </Link>
            //   </Grid>
            // </Grid>
            //#endregion
          }
          {/* </form> */}
        </div>
        <Box mt={8}>
          {this.Copyright()}
        </Box>
      </Container>
    );
  }
}
export default (InicioSesion);
