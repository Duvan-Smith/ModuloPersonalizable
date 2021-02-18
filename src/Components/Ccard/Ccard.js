import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Datos from '../Estilos/Datos';

withStyles(({ transitions }) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',

    transition: transitions.create('transform', {
      duration: transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ccontenidos:0,
      expanded: false,
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
    }
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  seleccionarContenido = (contenido) => {
    this.setState({ ccontenidos: contenido })
  }
  render() {
    const classes = withStyles();
    return (
      <Container fixed >
        <Datos
          seleccionarContenido={this.seleccionarContenido}
        />
        {this.state.ccontenidos}
        {this.state.contenidos[this.state.ccontenidos].titulo}
        {/* {this.state.contenidos[this.props.count].colorfondo} */}
        <Card
          // style={{
          //   padding: 100,
          //   textAlign: this.state.contenidos[this.props.count].posicion,
          //   background: this.state.contenidos[this.props.count].colorfondo,
          //   color: this.state.contenidos[this.props.count].colorletra,
          //   variant: this.state.contenidos[this.props.count].tamañoparrafos,
          // }}
        >
          <CardHeader
            // style={{
            //   variant: this.state.contenidos[this.props.count].tamañotitulo,
            // }}
            // title={this.state.contenidos[this.state.ccontenidos].titulo}
          />
          <img
            width="700"
            height="300"
            // src={this.state.contenidos[this.props.count].imagen}
          >

          </img>
          <CardMedia
            image="https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg"
            title="Live from space album cover"
          />
          <CardContent>
            <Typography component="p">
              {/* {this.state.contenidos[this.props.count].parrafo1} */}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={() => this.handleExpandClick()}
              aria-expanded={this.state.expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto"  >
            <CardContent>
              <Typography paragraph
                // style={{
                //   variant: this.state.contenidos[this.props.count].tamañosubtitulo,
                // }}
              >
                {/* {this.state.contenidos[this.props.count].subtitulo} */}
              </Typography>
              <Typography paragraph>
                {/* {this.state.contenidos[this.props.count].parrafo2} */}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
    );
  }
}
export default withStyles(withStyles)(App);