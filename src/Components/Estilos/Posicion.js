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
            posicion:["","center","left","right"],
            posicionT:["","center","flex-start","flex-end","space-between","space-around"],
            contenido: this.props.contenido,
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.count != prevState.count) {
            this.change(this.state.count);
        }
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    change(count) {
        var thergb = this.state.posicion[count];
        var thergb2 = this.state.posicionT[count];
        this.setState({
            thergb,thergb2
        })
    }
    render() {
        const { count } = this.state
        return (
            <Container fixed>
                {count}
                {this.state.thergb}
                <div 
                    className="App-header" 
                    style={{
                        color: 'black',
                        fontSize: 12,
                        justifyContent: this.state.thergb2,
                        textAlign:this.state.thergb,
                    }}
                >
                    <h1>
                        <br />
                        {this.state.contenido}
                    </h1>
                    <p>
                        <br />
                        El Servicio Geológico Colombiano informó de un sismo de 4,1 grados de magnitud hacia las 12:39 de la madrugada de este jueves 11 de febrero.
                    </p>
                </div>
            </Container>
        );
    }
}
export default App;
