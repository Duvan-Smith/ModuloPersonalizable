import React from 'react';
import Posicion from './Posicion';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ccolor: 0,
            count: 0,
            county: 0,
            countz: 0,
            contenidos: [{
                titulo: "En vivo - Unicauca tendrá matricula cero",
                parrafo1: "PERIODICOVIRTUAL.COM 16 FEB. 2021 • 1 MIN READ",
                subtitulo: "sub",
                parrafo2: "Cumplimiento al compromiso adquirido el día de ayer con los estudiantes de @unicauca , junto al Rector Jose Luis Diago, #SecEducaciónCauca, @Mineducacion y representantes estudiantiles para dialogar sobre la propuesta de",
                tamañosubtitulo: "subtitle1",
                tamañotitulo: "h1",
                tamañoparrafos: "body1",
                imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
            },
            {
                titulo: "En vivo - Unicauca tendrá matricula cero",
                parrafo1: "PERIODICOVIRTUAL.COM 16 FEB. 2021 • 1 MIN READ",
                subtitulo: "sub",
                parrafo2: "Cumplimiento al compromiso adquirido el día de ayer con los estudiantes de @unicauca , junto al Rector Jose Luis Diago, #SecEducaciónCauca, @Mineducacion y representantes estudiantiles para dialogar sobre la propuesta de",
                tamañosubtitulo: "subtitle1",
                tamañotitulo: "h1",
                tamañoparrafos: "body1",
                imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
            },
            {
                titulo: "En vivo - Unicauca tendrá matricula cero",
                parrafo1: "PERIODICOVIRTUAL.COM 16 FEB. 2021 • 1 MIN READ",
                subtitulo: "sub",
                parrafo2: "Cumplimiento al compromiso adquirido el día de ayer con los estudiantes de @unicauca , junto al Rector Jose Luis Diago, #SecEducaciónCauca, @Mineducacion y representantes estudiantiles para dialogar sobre la propuesta de",
                tamañosubtitulo: "subtitle1",
                tamañotitulo: "h1",
                tamañoparrafos: "body1",
                imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
            },
            ],
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.props.seleccionarContenido(this.state.count)
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
        var thergb = this.state.contenidos[count];
        this.setState({
            thergb
        })

    }
    render() {
        return (
            <div>
                    {/* <Posicion
                        contenidos={this.state.thergb}
                    /> */}
            </div>
        );
    }
}
export default App;