import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';

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
class Ccard extends React.Component {
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
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Se esta cambiando el tamaño de la letra';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  }
  getSteps() {
    return ['iteracion 1', 'iteracion 2', 'iteracion 3','iteracion 4', 'iteracion 5', 'iteracion 6'];
  }
  render() {
    const classes = withStyles();
    const activeStep = this.props.cColor//cColor es el que mas dura
    const activeStepcT = this.props.cTamano
    const activeStepcP = this.props.cPosicion
    const activeStepcP2 = this.props.cPosicion2
    const steps = this.getSteps();
    return (
      <>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={3}>
            <MobileStepper
              variant="progress"
              steps={this.state.tamano.length}
              position="static"
              activeStep={activeStepcT}
            />
            Se esta cambiando el tamaño de la letra
          </Grid>
          <Grid item xs={3}>
            <MobileStepper
              variant="progress"
              steps={this.state.posicion.length}
              position="static"
              activeStep={activeStepcP}
            />
            Se esta cambiando la posicion del texto
          </Grid>
          <Grid item xs={3}>
            <MobileStepper
              variant="progress"
              steps={this.state.posicionT.length}
              position="static"
              activeStep={activeStepcP2}
            />
            Se esta cambiando la posicion del componente completo
          </Grid>
          <Grid item xs={3}>
            <MobileStepper
              variant="progress"
              steps={this.state.colores.length}
              position="static"
              activeStep={activeStep}
            />
            Se esta cambiando el color de fondo
          </Grid>

        </Grid>
        <Grid
          container
          spacing={3}
          justify={this.state.posicionT[this.props.cPosicion2]}
          alignItems={this.state.posicionT[this.props.cPosicion2]}
        >

          {
            activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button>Regresar</Button>
              </div>
            )
              :
              (
                <Grid item xs={10}>
                  {/* <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography> */}

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
              )
          }
        </Grid>
      </>
    );
  }
}
export default withStyles(withStyles)(Ccard);