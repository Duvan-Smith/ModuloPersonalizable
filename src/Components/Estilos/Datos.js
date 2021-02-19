import React from 'react';
import Posicion from './Posicion';
import Ccard from '../Ccard/Ccard';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cColor: 0,
            cPosicion: 0,
            cPosicion2: 0,
            cTamano: 0,
            cContenido: 0,
            posicion: ["center", "left", "right"],
            posicionT: ["center", "flex-start", "flex-end", "space-between", "space-around"],
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
                titulo: "En vivo",
                parrafo1: "PERIODICOVIRTUAL.COM 16 FEB. 2021 • 1 MIN READ",
                subtitulo: "sub",
                parrafo2: "Cumplimiento al compromiso adquirido el día de ayer con los estudiantes de @unicauca , junto al Rector Jose Luis Diago, #SecEducaciónCauca, @Mineducacion y representantes estudiantiles para dialogar sobre la propuesta de",
                tamañosubtitulo: "subtitle1",
                tamañotitulo: "h1",
                tamañoparrafos: "body1",
                imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
            },
            {
                titulo: "Unicauca tendrá matricula cero",
                parrafo1: "PERIODICOVIRTUAL.COM 16 FEB. 2021 • 1 MIN READ",
                subtitulo: "sub",
                parrafo2: "Cumplimiento al compromiso adquirido el día de ayer con los estudiantes de @unicauca , junto al Rector Jose Luis Diago, #SecEducaciónCauca, @Mineducacion y representantes estudiantiles para dialogar sobre la propuesta de",
                tamañosubtitulo: "subtitle1",
                tamañotitulo: "h1",
                tamañoparrafos: "body1",
                imagen: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
            },
            ],
            colores: ["#ffebee",
                "#ffcdd2",
                "#ef9a9a",
                "#e57373",
                "#ef5350",
                "#f44336",
                "#e53935",
                "#d32f2f",
                "#c62828",
                "#b71c1c",
                "#fce4ec",
                "#f8bbd0",
                "#f48fb1",
                "#f06292",
                "#ec407a",
                "#e91e63",
                "#d81b60",
                "#c2185b",
                "#ad1457",
                "#880e4f",
                "#f3e5f5",
                "#e1bee7",
                "#ce93d8",
                "#ba68c8",
                "#ab47bc",
                "#9c27b0",
                "#8e24aa",
                "#7b1fa2",
                "#6a1b9a",
                "#4a148c",
                "#ede7f6",
                "#d1c4e9",
                "#b39ddb",
                "#9575cd",
                "#7e57c2",
                "#673ab7",
                "#5e35b1",
                "#512da8",
                "#4527a0",
                "#311b92",
                "#e8eaf6",
                "#c5cae9",
                "#9fa8da",
                "#7986cb",
                "#5c6bc0",
                "#3f51b5",
                "#3949ab",
                "#303f9f",
                "#283593",
                "#1a237e",
                "#e3f2fd",
                "#bbdefb",
                "#90caf9",
                "#64b5f6",
                "#42a5f5",
                "#2196f3",
                "#1e88e5",
                "#1976d2",
                "#1565c0",
                "#0d47a1",
                "#e1f5fe",
                "#b3e5fc",
                "#81d4fa",
                "#4fc3f7",
                "#29b6f6",
                "#03a9f4",
                "#039be5",
                "#0288d1",
                "#0277bd",
                "#01579b",
                "#e0f7fa",
                "#b2ebf2",
                "#80deea",
                "#4dd0e1",
                "#26c6da",
                "#00bcd4",
                "#00acc1",
                "#0097a7",
                "#00838f",
                "#006064",
                "#e0f2f1",
                "#b2dfdb",
                "#80cbc4",
                "#4db6ac",
                "#26a69a",
                "#009688",
                "#00897b",
                "#00796b",
                "#00695c",
                "#004d40",
                "#e8f5e9",
                "#c8e6c9",
                "#a5d6a7",
                "#81c784",
                "#66bb6a",
                "#4caf50",
                "#43a047",
                "#388e3c",
                "#2e7d32",
                "#1b5e20",
                "#f1f8e9",
                "#dcedc8",
                "#c5e1a5",
                "#aed581",
                "#9ccc65",
                "#8bc34a",
                "#7cb342",
                "#689f38",
                "#558b2f",
                "#33691e",
                "#f9fbe7",
                "#f0f4c3",
                "#e6ee9c",
                "#dce775",
                "#d4e157",
                "#cddc39",
                "#c0ca33",
                "#afb42b",
                "#9e9d24",
                "#827717",
                "#fffde7",
                "#fff9c4",
                "#fff59d",
                "#fff176",
                "#ffee58",
                "#ffeb3b",
                "#fdd835",
                "#fbc02d",
                "#f9a825",
                "#f57f17",
                "#fff8e1",
                "#ffecb3",
                "#ffe082",
                "#ffd54f",
                "#ffca28",
                "#ffc107",
                "#ffb300",
                "#ffa000",
                "#ff8f00",
                "#ff6f00",
                "#fff3e0",
                "#ffe0b2",
                "#ffcc80",
                "#ffb74d",
                "#ffa726",
                "#ff9800",
                "#fb8c00",
                "#f57c00",
                "#ef6c00",
                "#e65100",
                "#fbe9e7",
                "#ffccbc",
                "#ffab91",
                "#ff8a65",
                "#ff7043",
                "#ff5722",
                "#f4511e",
                "#e64a19",
                "#d84315",
                "#bf360c",
                "#efebe9",
                "#d7ccc8",
                "#bcaaa4",
                "#a1887f",
                "#8d6e63",
                "#795548",
                "#6d4c41",
                "#5d4037",
                "#4e342e",
                "#3e2723",
                "#fafafa",
                "#f5f5f5",
                "#eeeeee",
                "#e0e0e0",
                "#bdbdbd",
                "#9e9e9e",
                "#757575",
                "#616161",
                "#424242",
                "#212121",
                "#eceff1",
                "#cfd8dc",
                "#b0bec5",
                "#90a4ae",
                "#78909c",
                "#607d8b",
                "#546e7a",
                "#455a64",
                "#37474f",
                "#263238"]
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.cColor == 10) {
                this.setState({
                    cColor: 0,
                })
            } else {
                this.setState({
                    cColor: this.state.cColor + 1,
                })
            }
        }, 1000);
        setInterval(() => {
            if (this.state.cPosicion == 2) {
                this.setState({
                    cPosicion: 0,
                })
            } else {
                this.setState({
                    cPosicion: this.state.cPosicion + 1,
                })
            }
        }, 1000);
        setInterval(() => {
            if (this.state.cPosicion2 == 4) {
                this.setState({
                    cPosicion2: 0,
                })
            } else {
                this.setState({
                    cPosicion2: this.state.cPosicion2 + 1,
                })
            }
        }, 1000);
        setInterval(() => {
            if (this.state.cTamano == 2) {
                this.setState({
                    cTamano: 0,
                })
            } else {
                this.setState({
                    cTamano: this.state.cTamano + 1,
                })
            }
        }, 1000);
        setInterval(() => {
            if (this.state.cContenido == 2) {
                this.setState({
                    cContenido: 0,
                })
            } else {
                this.setState({
                    cContenido: this.state.cContenido + 1,
                })
            }
        }, 1000);

    }
    render() {
        const { cColor, cPosicion, cPosicion2, cTamano, cContenido } = this.state

        return (
            <div>
                {cColor}
                <br />
                {cPosicion}
                <br />
                {cPosicion2}
                <br />
                {this.state.posicion[cPosicion]}
                <Ccard
                    cColor={cColor}
                    cPosicion={cPosicion}
                    cPosicion2={cPosicion2}
                    cTamano={cTamano}
                    cContenido={cContenido}

                    colores={this.state.colores}
                    posicion={this.state.posicion}
                    posicionT={this.state.posicionT}
                    contenidos={this.state.contenidos}

                />
            </div>
        );
    }
}
export default App;