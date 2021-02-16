import React from 'react';
import '../../CSS/App.css';
import moment from 'moment';
import { blue } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            tamanoT: 24,
            tamanoP: 12,
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                tamanoT: this.state.tamanoT + 3,
                tamanoP: this.state.tamanoP + 2,
            })
            if (this.state.count >= 22) {

                this.props.seleccionarTLetra(this.state.count)
            }

        }, 1000);
    }
    render() {
        const { count, tamanoT, tamanoP } = this.state
        return (
            <Container fixed >

                <div className="App-header" style={{ color: 'black', }}>
                    <h1
                        style={{
                            fontSize: this.state.tamanoT,
                        }}
                    >
                        <br />
                        Tembló el día de hoy en Colombia y el susto despertó a muchos{tamanoT}
                    </h1>
                    <p
                        style={{
                            fontSize: this.state.tamanoP,
                        }}
                    >
                        <br />
                        El Servicio Geológico Colombiano informó de un sismo de 4,1 grados de magnitud hacia las 12:39 de la madrugada de este jueves 11 de febrero.{tamanoP}
                    </p>
                </div>
            </Container>
        );
    }
}
export default App;
