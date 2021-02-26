import React from 'react';
import '../../CSS/App.css';
import AppBar from "../../Bar/AppBar";
import Cookies from 'universal-cookie';
import Configurador from './ConfiguradorAdmin';
import Grid from '@material-ui/core/Grid';

const cookies = new Cookies();
class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    if (!cookies.get('nombreusuario')) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <div>
        <AppBar />
        <div
          className="Margen"
        >
          <Grid container
            spacing={3}
            style={{
              justifyContent: "center",
              textAlign: "center",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid item xs={10}>
              <Configurador />
            </Grid></Grid>
        </div>
      </div>
    );
  }
}
export default Admin;