import React from 'react';
import '../../CSS/App.css';
import Button from '@material-ui/core/Button';
import AppBar from "../../Bar/AppBar";

class Usuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    irComPersonalizable = () => {
        window.location.href = "./personalizacion";
    }
    render() {
        return (
            <div>
                <AppBar/>
                <Button color="inherit" onClick={() => this.irComPersonalizable()}>Iniciar</Button>
            </div>
        );
    }
}
export default Usuario;