import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MobileStepper from '@material-ui/core/MobileStepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
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
        return ['iteracion 1', 'iteracion 2', 'iteracion 3', 'iteracion 4', 'iteracion 5', 'iteracion 6'];
    }
    render() {
        const classes = withStyles();
        const activeStep = !cookies.get('cColor') ? this.props.cColor : cookies.get('cColor')//cColor es el que mas dura
        const activeStepcT = !cookies.get('cTamano') ? this.props.cTamano : cookies.get('cTamano')
        const activeStepcP = !cookies.get('cPosicion') ? this.props.cPosicion : cookies.get('cPosicion')
        const activeStepcP2 = !cookies.get('cPosicion2') ? this.props.cPosicion2 : cookies.get('cPosicion2')
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
                            steps={this.state.tamano.length + 1}
                            position="static"
                            activeStep={activeStepcT + 1}

                        />
            Se esta cambiando el tamaño de la letra
          </Grid>
                    <Grid item xs={3}>
                        <MobileStepper
                            variant="progress"
                            steps={this.state.posicion.length + 1}
                            position="static"
                            activeStep={activeStepcP + 1}
                        />
            Se esta cambiando la posicion del texto
          </Grid>
                    <Grid item xs={3}>
                        <MobileStepper
                            variant="progress"
                            steps={this.state.posicionT.length + 1}
                            position="static"
                            activeStep={activeStepcP2 + 1}
                        />
            Se esta cambiando la posicion del componente completo
          </Grid>
                    <Grid item xs={3}>
                        <MobileStepper
                            variant="progress"
                            steps={this.state.colores.length + 1}
                            position="static"
                            activeStep={activeStep + 1}
                        />
            Se esta cambiando el color de fondo
          </Grid>
                </Grid>
                <Grid
                    container
                    spacing={3}
                    justify={this.state.posicionT[!cookies.get('cPosicion2') ? this.props.cPosicion2 : cookies.get('cPosicion2')]}
                    alignItems={this.state.posicionT[!cookies.get('cPosicion2') ? this.props.cPosicion2 : cookies.get('cPosicion2')]}
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
                                    <Card
                                        style={{
                                            background: this.state.colores[!cookies.get('cColor') ? this.props.cColor : cookies.get('cColor')],
                                            textAlign: this.state.posicion[!cookies.get('cPosicion') ? this.props.cPosicion : cookies.get('cPosicion')],
                                        }}
                                    >
                                        <Typography gutterBottom
                                            style={{
                                                marginLeft: 20,
                                                marginRight: 20,
                                                marginBottom: 20,
                                                marginTop: 20,
                                            }}
                                            variant={this.state.tamano[!cookies.get('cTamano') ? this.props.cTamano : cookies.get('cTamano')].titulo}
                                        >
                                            {this.state.contenidos[!cookies.get('cContenido') ? this.props.cContenido : cookies.get('cContenido')].titulo}
                                        </Typography>
                                        <img
                                            style={{
                                                marginLeft: 20,
                                                marginRight: 20,
                                                marginBottom: 20,
                                                marginTop: 20,
                                            }}
                                            width={this.state.tamano[!cookies.get('cTamano') ? this.props.cTamano : cookies.get('cTamano')].imagen}
                                            height="auto"
                                            src={this.state.contenidos[!cookies.get('cContenido') ? this.props.cContenido : cookies.get('cContenido')].imagen}
                                        >
                                        </img>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    fontSize: this.state.tamano[!cookies.get('cTamano') ? this.props.cTamano : cookies.get('cTamano')].parrafos,
                                                }}
                                            >
                                                {this.state.contenidos[!cookies.get('cContenido') ? this.props.cContenido : cookies.get('cContenido')].parrafo1}
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
                                                    variant={this.state.tamano[!cookies.get('cTamano') ? this.props.cTamano : cookies.get('cTamano')].subtitulo}
                                                >
                                                    {this.state.contenidos[!cookies.get('cContenido') ? this.props.cContenido : cookies.get('cContenido')].subtitulo}
                                                </Typography>
                                                <br />
                                                <Typography paragraph
                                                    style={{
                                                        fontSize: this.state.tamano[!cookies.get('cTamano') ? this.props.cTamano : cookies.get('cTamano')].parrafos,
                                                    }}
                                                >
                                                    {this.state.contenidos[!cookies.get('cContenido') ? this.props.cContenido : cookies.get('cContenido')].parrafo2}
                                                </Typography>
                                                <br />
                                                <Typography paragraph
                                                    style={{
                                                        fontSize: this.state.tamano[!cookies.get('cTamano') ? this.props.cTamano : cookies.get('cTamano')].parrafos,
                                                    }}
                                                >
                                                    {this.state.contenidos[!cookies.get('cContenido') ? this.props.cContenido : cookies.get('cContenido')].parrafo3}
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