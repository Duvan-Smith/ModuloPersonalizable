import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from '../Components/Admin/Admin';
import AdminC from '../Components/Admin/AdminC';
import Configurador from '../Components/ConfiguradorCard/Configurador';
import InicioSesion from '../Components/InicioSesion/InicioSesion';
import Usuario from '../Components/Usuario/Usuario';
import ConfiguradorAdmin from '../Components/Admin/ConfiguradorAdmin';
import '../CSS/App.css';
class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={InicioSesion} />
                    <Route exact path="/admin" component={Admin} />
                    {/* si funciona */}
                    {/* <Route exact path="/admin/Configurador" component={ConfiguradorAdmin} /> */}
                    <Route exact path="/admin/Configurador" component={AdminC} />
                    <Route exact path="/user" component={Usuario} />
                    <Route exact path="/personalizacion" component={Configurador} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Routes;