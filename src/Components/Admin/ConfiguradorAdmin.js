import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const useStyles = {
    botonGuardar: {
        background: '#4caf50',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    botonBuscar: {
        background: '#303f9f',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 40,
        padding: '0 20px',
    },
    campos: {
        margin: 5,
        width: '120%',
        border: 0,
        borderRadius: 3,
    },
};

class ConfiguradorAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                cTamano: -1,
                cPosicion: -1,
                cPosicion2: -1,
                cContenido: -1,
                cColor: -1,
                timepoInicial: -1
            },
            timepoInicialL: [
                { tiempo: 0, nombre: "Sin tiempo" },
                { tiempo: 1000, nombre: "1 segundo" },
                { tiempo: 2000, nombre: "2 segundos" },
                { tiempo: 5000, nombre: "5 segundos" },
                { tiempo: 10000, nombre: "10 segundos" }
            ],
            tamano: [
                {
                    nombre: "Pequeño",
                    titulo: "h4",
                    subtitulo: "h6",
                    parrafos: 16,
                    imagen: "60%",
                },
                {
                    nombre: "Grande",
                    titulo: "h5",
                    subtitulo: "subtitle1",
                    parrafos: 12,
                    imagen: "80%",
                },
            ],
            posicion: ["center", "left", "right"],
            posicionT: ["center", "flex-start", "flex-end"],
            //https://www.unicomfacauca.edu.co/tag/premio/
            //https://www.elespectador.com/entretenimiento/musica/premios-lo-nuestro-como-ver-la-transmision/
            //https://www.eltiempo.com/cultura/cine-y-tv/globos-de-oro-2021-conozca-las-series-peliculas-y-actores-nominados-564266
            contenidos: [{
                titulo: "Ganamos premio de Cooperación Internacional de la Universidad Politécnica de Madrid",
                parrafo1: "En pasados días, obtuvimos el premio de Cooperación Internacional en Investigación para el Desarrollo, por parte de la Universidad Politécnica de Madrid, gracias al trabajo académico y de investigación desarrollado con el Parque Tecnológico de Innovación del Café – Tecnicafé. […]",
                subtitulo: "premio, reconocimiento, Universidad Politecnica de Madrid, upm",
                parrafo2: "En pasados días, obtuvimos el premio de Cooperación Internacional en Investigación para el Desarrollo, por parte de la Universidad Politécnica de Madrid, gracias al trabajo académico y de investigación desarrollado con el Parque Tecnológico de Innovación del Café – Tecnicafé.",
                parrafo3: "La ceremonia de entrega de estos reconocimientos, denominados los Premios anuales de Investigación e Innovación 2020, la hace esta universidad española donde destaca sus alianzas estratégicas y proyectos desarrollados en conjunto con otras instituciones locales e internacionales. Además, tiene por objetivo premiar a aquellos aliados, seleccionados mediante concurrencia competitiva, que han contribuido significativamente a fomentar la investigación, innovación y la transferencia de conocimientos de la UPM.",
                imagen: "https://www.unicomfacauca.edu.co/wp-content/uploads/Premio-UPM.jpg",
            },
            {
                titulo: "Premios Lo Nuestro: hora y cómo ver a Maluma y otros artistas",
                parrafo1: "Aunque las nominaciones de Premios Lo Nuestro siguen dominadas por los artistas de música urbana, con base en el reguetón, los exponentes y canciones de los distintos subgéneros del regional mexicano han comenzado a pisarles los talones. / Agencias",
                subtitulo: "Música18 feb. 2021 - 7:04 p. m. Por: Agencia EFE",
                parrafo2: "Aunque las nominaciones de Premios Lo Nuestro siguen dominadas por los artistas de música urbana, con base en el reguetón, los exponentes y canciones de los distintos subgéneros del regional mexicano han comenzado a pisarles los talones. / Agencias",
                parrafo3: "La trigésima tercera entrega de Premio Lo Nuestro, el galardón más antiguo de música latina en Estados Unidos, se realiza este jueves en la ciudad estadounidense de Miami con varios números en vivo y alfombra, aunque sin público y con la notable ausencia de J Balvin, el artista con más nominaciones.",
                imagen: "https://www.elespectador.com/resizer/1M6ysIvyemIITjAeeI7AqX7dLbA=/657x0/cloudfront-us-east-1.images.arcpublishing.com/elespectador/K4GAYQTL5FCGXKLYIRNDEU7XB4.jpg",
            },
            {
                titulo: "'Gambito de Dama' y 'The Crown', favoritos a los Globos de Oro 2021",
                parrafo1: "La temporada de premios en Hollywood arranca este miércoles, en la madrugada de Los Ángeles (EE.UU.), con el anuncio de las películas y series de televisión nominadas a los Globos de Oro en una de sus ediciones más abiertas e impredecibles por la pandemia del coronavirus.",
                subtitulo: "Plataformas como Netflix esperan las nominaciones a los Golden Globes.",
                parrafo2: "La temporada de premios en Hollywood arranca este miércoles, en la madrugada de Los Ángeles (EE.UU.), con el anuncio de las películas y series de televisión nominadas a los Globos de Oro en una de sus ediciones más abiertas e impredecibles por la pandemia del coronavirus.",
                parrafo3: "Borat 2, Nomadland, Gambito de Dama, Orzac y The Crown son algunas de las producciones que suenan como favoritas para la Asociación de la Prensa Extranjera de Hollywood (HFPA), un grupo de unos 90 periodistas que, acostumbrados a viajes, premieres, fiestas y entrevistas, deberán escoger lo mejor del año desde el sofá de su casa.",
                imagen: "https://www.eltiempo.com/files/article_main/files/crop/uploads/2020/11/16/5fb3353273d77.r_1612380235380.0-0-1033-512.jpeg",
            },
            ],
            colores: ['#ffcdd2',
                '#ef9a9a',
                '#e57373',
                '#f8bbd0',
                '#f48fb1',
                '#e1bee7',
                '#ce93d8',
                '#d1c4e9',
                '#b39ddb',
                '#c5cae9',
                '#9fa8da',
                '#bbdefb',
                '#90caf9',
                '#64b5f6',
                '#42a5f5',
                '#b3e5fc',
                '#81d4fa',
                '#4fc3f7',
                '#29b6f6',
                '#03a9f4',
                '#b2ebf2',
                '#80deea',
                '#4dd0e1',
                '#26c6da',
                '#00bcd4',
                '#00acc1',
                '#b2dfdb',
                '#80cbc4',
                '#4db6ac',
                '#c8e6c9',
                '#a5d6a7',
                '#81c784',
                '#66bb6a',
                '#4caf50',
                '#dcedc8',
                '#c5e1a5',
                '#aed581',
                '#9ccc65',
                '#8bc34a',
                '#7cb342',
                '#f0f4c3',
                '#e6ee9c',
                '#dce775',
                '#d4e157',
                '#cddc39',
                '#c0ca33',
                '#afb42b',
                '#9e9d24',
                '#fff9c4',
                '#fff59d',
                '#fff176',
                '#ffee58',
                '#ffeb3b',
                '#fdd835',
                '#fbc02d',
                '#f9a825',
                '#f57f17',
                '#ffecb3',
                '#ffe082',
                '#ffd54f',
                '#ffca28',
                '#ffc107',
                '#ffb300',
                '#ffa000',
                '#ff8f00',
                '#ff6f00',
                '#ffe0b2',
                '#ffcc80',
                '#ffb74d',
                '#ffa726',
                '#ff9800',
                '#fb8c00',
                '#f57c00',
                '#ffccbc',
                '#ffab91',
                '#ff8a65',
                '#ff7043',
                '#d7ccc8',
                '#bcaaa4',
                '#f5f5f5',
                '#eeeeee',
                '#e0e0e0',
                '#bdbdbd',
                '#9e9e9e',
                '#cfd8dc',
                '#b0bec5',
                '#90a4ae'
            ]
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log([e.target.name] + ":" + e.target.value)
    }
    realizarCambios = () => {
        if (this.state.form.cTamano > -1 && this.state.form.cPosicion > -1 && this.state.form.cPosicion2 > -1 &&
            this.state.form.cColor > -1 && this.state.form.cContenido > -1 && this.state.form.timepoInicial > -1) {
            cookies.set('cTamano', this.state.form.cTamano, { path: "/personalizacion" });
            cookies.set('cPosicion', this.state.form.cPosicion, { path: "/personalizacion" });
            cookies.set('cPosicion2', this.state.form.cPosicion2, { path: "/personalizacion" });
            cookies.set('cColor', this.state.form.cColor, { path: "/personalizacion" });
            cookies.set('cContenido', this.state.form.cContenido, { path: "/personalizacion" });
            cookies.set('timepoInicial', this.state.form.timepoInicial, { path: "/personalizacion" });
            cookies.set('ConfiguradorAdmin', true, { path: "/personalizacion" });
            console.log(this.state.form.timepoInicial)
            window.location.pathname = "./personalizacion";
        }
    }
    limpiar = () => {
        cookies.remove('cTamano', { path: "/" });
        cookies.remove('cPosicion', { path: "/" });
        cookies.remove('cPosicion2', { path: "/" });
        cookies.remove('cColor', { path: "/" });
        cookies.remove('cContenido', { path: "/" });
        cookies.remove('timepoInicial', { path: "/" });
        cookies.remove('ConfiguradorAdmin', { path: "/" });
        this.setState({
            cTamano: -1,
            cPosicion: -1,
            cPosicion2: -1,
            cContenido: -1,
            cColor: -1,
            cColor: -1,
        })
        if (cookies.get('rol') == "user") {
            window.location.href = "../user";
        } else {
            window.location.href = "./admin";
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <>
                <div className="row" style={{ margin: 10 }}>
                    <div className="col-6">
                        <InputLabel id="timepoInicial">Tiempo inicial de la iteracion</InputLabel>
                        <select
                            labelId="timepoInicial"
                            id="timepoInicial"
                            value={this.state.timepoInicial}
                            onChange={this.handleChange}
                            label="timepoInicial"
                            name="timepoInicial"
                        >
                            <option value={-1}>
                                Seleccionar
                        </option>
                            {
                                <>
                                    {
                                        this.state.timepoInicialL.map((dat, index) => {
                                            return (
                                                <option key={"timepoInicial" + index} value={dat.tiempo} >
                                                    {dat.nombre}
                                                </option>
                                            )
                                        }
                                        )
                                    }
                                </>
                            }
                        </select>
                    </div>
                    <div className="col-6" >
                        <InputLabel id="cTamano">Tamaño de la letra</InputLabel>
                        <select
                            labelId="cTamano"
                            id="cTamano"
                            value={this.state.cTamano}
                            onChange={this.handleChange}
                            label="cTamano"
                            name="cTamano"
                        >
                            <option value={-1}>
                                Seleccionar
                        </option>
                            {
                                <>
                                    {
                                        this.state.tamano.map((dat, index) => {
                                            return (
                                                <option key={"cTamano" + index} value={index} >
                                                    {dat.nombre}
                                                </option>
                                            )
                                        }
                                        )
                                    }
                                </>
                            }
                        </select>
                    </div>
                </div>
                <div className="row" style={{ margin: 10 }}>
                    <div className="col-6" >
                        <InputLabel id="cPosicion">Posicion del texto</InputLabel>
                        <select
                            labelId="cPosicion"
                            id="cPosicion"
                            value={this.state.cPosicion}
                            onChange={this.handleChange}
                            label="cPosicion"
                            name="cPosicion"
                        >
                            <option value={-1}>
                                Seleccionar
                        </option>
                            {
                                <>
                                    {
                                        this.state.posicion.map((dat, index) => {
                                            return (
                                                <option key={"cPosicion" + index} value={index}>
                                                    {dat}
                                                </option>
                                            )
                                        }
                                        )
                                    }
                                </>
                            }
                        </select>
                    </div>
                    <div className="col-6" >
                        <InputLabel id="cPosicion2">Posicion del componente</InputLabel>
                        <select
                            labelId="cPosicion2"
                            id="cPosicion2"
                            value={this.state.cPosicion2}
                            onChange={this.handleChange}
                            label="cPosicion2"
                            name="cPosicion2"
                        >
                            <option value={-1}>
                                Seleccionar
                        </option>
                            {
                                <>
                                    {
                                        this.state.posicionT.map((dat, index) => {
                                            return (
                                                <option key={"cPosicion2" + index} value={index}>
                                                    {dat}
                                                </option>
                                            )
                                        }
                                        )
                                    }
                                </>
                            }
                        </select>
                    </div>
                </div>
                <div className="row" style={{ margin: 10 }}>
                    <div className="col-6" >
                        <InputLabel id="cColor">Color</InputLabel>
                        <select
                            labelId="cColor"
                            id="cColor"
                            value={this.state.cColor}
                            onChange={this.handleChange}
                            label="cColor"
                            name="cColor"
                        >
                            <option value={-1}>
                                Seleccionar
                        </option>
                            {
                                <>
                                    {
                                        this.state.colores.map((dat, index) => {
                                            return (
                                                <option key={"cColor" + index} value={index} style={{ background: dat, }}>
                                                    {dat}
                                                </option>
                                            )
                                        }
                                        )
                                    }
                                </>
                            }
                        </select>
                    </div>
                    <div className="col-12" >
                        <InputLabel id="cContenido">Noticia</InputLabel>
                        <select
                            labelId="cContenido"
                            id="cContenido"
                            value={this.state.cContenido}
                            onChange={this.handleChange}
                            label="cContenido"
                            name="cContenido"
                        >
                            <option value={-1}>
                                Seleccionar
                        </option>
                            {
                                <>
                                    {
                                        this.state.contenidos.map((dat, index) => {
                                            return (
                                                <option key={"cContenido" + index} value={index}>
                                                    {dat.titulo}
                                                </option>
                                            )
                                        }
                                        )
                                    }
                                </>
                            }
                        </select>
                    </div>
                </div>
                <div className="row" style={{ margin: 10 }}>
                    <div className="col-6" >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={() => this.realizarCambios()}
                        >
                            Realizar Cambios
                    </Button>
                    </div>
                    <div className="col-6" >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={() => this.limpiar()}
                        >
                            Limpiar Cambios
                    </Button>
                    </div>
                </div>
            </>
        );
    }
}
export default withStyles(useStyles)(ConfiguradorAdmin);