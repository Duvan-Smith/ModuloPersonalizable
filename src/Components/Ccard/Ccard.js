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

withStyles(({ transitions }) => ({
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
}));
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // ccontenidos: 0,
      expanded: false,
      colores: this.props.colores,
      posicion: this.props.posicion,
      posicionT: this.props.posicionT,
      contenidos: this.props.contenidos,
      tamano: this.props.tamano,
    }
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  // seleccionarContenido = (contenido) => {
  //   this.setState({ ccontenidos: contenido })
  // }
  render() {
    const classes = withStyles();
    return (
      <Container fixed>
        
        <Card
          style={{
            background: this.state.colores[this.props.cColor],
            textAlign: this.state.posicion[this.props.cPosicion],
            justifyContent: this.state.posicionT[this.props.cPosicion2],
            fontSize: this.state.tamanoT,
          }}
        >
          {/* <CardHeader variant="h1"
            title={this.state.contenidos[this.props.cContenido].titulo}
          /> */}
          <Typography gutterBottom variant={this.state.tamano[this.props.cTamano].titulo}
          >
            {this.state.contenidos[this.props.cContenido].titulo}
          </Typography>
          <img
            width={this.state.tamano[this.props.cTamano].imagen}
            height= "auto"
            src={this.state.contenidos[this.props.cContenido].imagen}
          >
          </img>
          <CardContent>
            <Typography variant={this.state.tamano[this.props.cTamano].parrafos}>
              {this.state.contenidos[this.props.cContenido].parrafo1}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
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
              <Typography //paragraph
                variant={this.state.tamano[this.props.cTamano].subtitulo}
              >
                {this.state.contenidos[this.props.cContenido].subtitulo}
              </Typography>
              <Typography //paragraph
                variant={this.state.tamano[this.props.cTamano].parrafos}
              >
                {this.state.contenidos[this.props.cContenido].parrafo2}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
    );
  }
}
export default withStyles(withStyles)(App);