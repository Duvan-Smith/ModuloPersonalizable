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
import Grid from '@material-ui/core/Grid';

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
  render() {
    const classes = withStyles();
    return (
      <Grid
        container
        spacing={3}
        justify={this.state.posicionT[this.props.cPosicion2]}
        alignItems={this.state.posicionT[this.props.cPosicion2]}
      >
        <Grid item xs={10}>
          <Card
            style={{
              background: this.state.colores[this.props.cColor],
              textAlign: this.state.posicion[this.props.cPosicion],
            }}
          >
            {/* <CardHeader 
            variant={this.state.contenidos[this.props.cContenido].titulo}
            title={this.state.contenidos[this.props.cContenido].titulo}
          /> */}
            <Typography gutterBottom
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                marginTop: 20,
              }}
              variant={this.state.tamano[this.props.cTamano].titulo}
            >
              {this.state.contenidos[this.props.cContenido].titulo}
            </Typography>
            {/* <CardMedia
            // image={this.state.contenidos[this.props.cContenido].imagen}
            image="../../Data/prueba.jpg"
            title="Paella dish"
          /> */}
            <img
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                marginTop: 20,
              }}
              width={this.state.tamano[this.props.cTamano].imagen}
              height="auto"
              src={this.state.contenidos[this.props.cContenido].imagen}
            >
            </img>
            <CardContent>
              <Typography
                style={{
                  fontSize: this.state.tamano[this.props.cTamano].parrafos,
                }}
              // variant={this.state.tamano[this.props.cTamano].parrafos}
              >
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
            <Collapse in={this.state.expanded}  >
              <CardContent>
                <Typography
                  variant={this.state.tamano[this.props.cTamano].subtitulo}
                >
                  {this.state.contenidos[this.props.cContenido].subtitulo}
                </Typography>
                <br />
                <Typography paragraph
                  style={{
                    fontSize: this.state.tamano[this.props.cTamano].parrafos,
                  }}
                >
                  {this.state.contenidos[this.props.cContenido].parrafo2}
                </Typography>
                <br />
                <Typography paragraph
                  style={{
                    fontSize: this.state.tamano[this.props.cTamano].parrafos,
                  }}
                >
                  {this.state.contenidos[this.props.cContenido].parrafo3}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(withStyles)(App);