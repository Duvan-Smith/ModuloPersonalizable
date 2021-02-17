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
    seleccionarCFondo = (cfondo) => {
        this.setState({ cFondoSeleccionada: cfondo })
    }
    seleccionarTLetra = (tletra) => {
        this.setState({ tLetraSeleccionada: tletra })
    }
    render() {
        return (
            <div>
                <header >
                    {/* <ColorFondo seleccionarCFondo = { this.seleccionarCFondo }/>  */}
                    {/* {
                        this.state.contenidos.map((obj)=>
                            <>
                                <Posicion 
                                    contenido={obj}
                                />
                            </>
                        )
                    } */}
                    <Posicion
                        contenidos={this.state.contenidos}
                    />

                    {/* {
                        this.state.cFondoSeleccionada >= 31 ?
                            this.state.tLetraSeleccionada >= 31 ?
                                <>
                                    fin
                                </>
                                :
                                <>
                                    <TamañoLetra
                                        seleccionarTLetra={this.seleccionarTLetra}
                                    />
                                </>
                            :
                            <>
                                <ColorFondo
                                    seleccionarCFondo={this.seleccionarCFondo}
                                />
                            </>
                    } */}
                </header>
            </div>
        );
    }
}
export default App;