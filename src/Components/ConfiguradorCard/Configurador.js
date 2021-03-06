import Container from '@material-ui/core/Container';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import AppBar from "../../Bar/AppBar";
import CcardInicial from '../Ccard/CcardInicial';
//TODO: Duvan, bug - no reconoce la primera configuracion. Se debe realizar la configuracion 3 veses para que funcione.
const cookies = new Cookies();
toast.configure()
///<summary>
///Este metodo permite configurar lo que va a ver el usuario final y el como lo va a ver
///Puede ver diferentes noticias
///Puede ver estas noticias con diferente color de fondo tamaño o posicion
///</summary>
class Configurador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timepoInicial: !cookies.get('ConfiguradorAdmin') ? 50 : cookies.get('timepoInicial'),
            cColor: !cookies.get('ConfiguradorAdmin') ? 0: cookies.get('cColor'),
            cPosicion: !cookies.get('ConfiguradorAdmin') ? 0: cookies.get('cPosicion'),
            cPosicion2: !cookies.get('ConfiguradorAdmin') ? 0: cookies.get('cPosicion2'),
            cTamano: !cookies.get('ConfiguradorAdmin') ? 0: cookies.get('cTamano'),
            cContenido: !cookies.get('ConfiguradorAdmin') ? 0: cookies.get('cContenido'),
            cStepper:0,
            cCStepper:0,
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
            colores: [
                '#ffcdd2',
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
            ],                
        }
    }
    componentDidMount = async () => {
        var tiempo = this.state.timepoInicial;
        await setInterval(() => {
            if (this.state.cTamano >= this.state.tamano.length - 1) {
                this.setState({
                    cTamano: 0,
                })
            } else {
                this.setState({
                    cTamano: this.state.cTamano + 1,
                })
            }
        }, tiempo);
        tiempo = tiempo * this.state.tamano.length;
        await setInterval(() => {
            if (this.state.cPosicion >= this.state.posicion.length - 1) {
                this.setState({
                    cPosicion: 0,
                })
            } else {
                this.setState({
                    cPosicion: this.state.cPosicion + 1,
                })
            }
        }, tiempo);
        tiempo = tiempo * this.state.posicion.length;
        await setInterval(() => {
            if (this.state.cPosicion2 >= this.state.posicionT.length - 1) {
                this.setState({
                    cPosicion2: 0,
                })
            } else {
                this.setState({
                    cPosicion2: this.state.cPosicion2 + 1,
                })
            }
        }, tiempo);
        tiempo = tiempo * this.state.posicionT.length;
        await setInterval(() => {
            if (this.state.cColor >= this.state.colores.length - 1) {
                this.setState({
                    cColor: 0,
                })
            } else {
                this.setState({
                    cColor: this.state.cColor + 1,
                })
            }
            if(this.state.cCStepper<1)
                {
                    this.setState({
                        cStepper: 0,
                        cCStepper: this.state.cStepper + 1,
                    })
                }
                if(this.state.cCStepper>=1){
                    this.setState({
                        cStepper: 1,
                        cCStepper: this.state.cStepper + 1,
                    })
                }
                if(this.state.cCStepper>=this.state.colores.length - 1){
                    this.setState({
                        cStepper: 2,
                        cCStepper: this.state.cStepper + 1,
                    })
                }
        }, tiempo);
        await setInterval(() => {
            if (this.state.cContenido >= this.state.contenidos.length - 1) {
                this.setState({
                    cContenido: 0,
                })
            } else {
                this.setState({
                    cContenido: this.state.cContenido + 1,
                })
            }
        }, 80000);//TODO: tiempo = tiempo * this.state.colores.length; -> no se implementa por el tamaño de la lista de colores
    }
    render() {
        const { cColor, cPosicion, cPosicion2, cTamano, cContenido, cStepper } = this.state
        return (
            <div>
                <AppBar />
                <Container component="main"
                    style={{
                        justifyContent: "center",
                        textAlign: "center",
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 5,
                        marginBottom: 5
                    }}
                >
                    {
                        cookies.get('cTamano') == 0?
                            <CcardInicial
                                cColor={cookies.get('cColor')}
                                cPosicion={cookies.get('cPosicion')}
                                cPosicion2={cookies.get('cPosicion2')}
                                cTamano={cookies.get('cTamano')}
                                cContenido={cookies.get('cContenido')}
                                cStepper={cStepper}

                                colores={this.state.colores}
                                posicion={this.state.posicion}
                                posicionT={this.state.posicionT}
                                tamano={this.state.tamano}
                                contenidos={this.state.contenidos}
                            />
                            :
                            <CcardInicial
                                cColor={cColor}
                                cPosicion={cPosicion}
                                cPosicion2={cPosicion2}
                                cTamano={cTamano}
                                cContenido={0}
                                cStepper={cStepper}

                                colores={this.state.colores}
                                posicion={this.state.posicion}
                                posicionT={this.state.posicionT}
                                tamano={this.state.tamano}
                                contenidos={this.state.contenidos}
                            />
                    }

                </Container>
            </div>
        );
    }
}
export default Configurador;