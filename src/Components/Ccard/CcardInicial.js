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
class CcardInicial extends React.Component {
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
    getSteps() {
        return ['Se ha iniciado la configuración', 'Se está procesando tu personalización', 'Se está finalizando tu personalización'];
    }
    render() {
        const classes = withStyles();
        const activeStep = this.props.cStepper//cColor es el que mas dura
        const activeStepcC = this.props.cColor
        const activeStepcT = this.props.cTamano
        const activeStepcP = this.props.cPosicion
        const activeStepcP2 = this.props.cPosicion2
        const steps = this.getSteps();
        return (
            <>
            {this.state.colores}
            <br/>
            {this.props.cColor}
                <Stepper activeStep={activeStep} >
                    {
                        steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
                <Grid
                    container
                    spacing={3}
                    justify="center"
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
                    {
                        //TODO: Comentar este Steepr 
                        //#region Error
                        /* <Grid item xs={3}>
                            <MobileStepper
                                variant="progress"
                                steps={this.state.posicionT.length + 1}
                                position="static"
                                activeStep={activeStepcP2 + 1}
                            />
                            Se esta cambiando la posicion del componente completo
                        </Grid> */
                        //#endregion
                    }
                    <Grid item xs={3}>
                        <MobileStepper
                            variant="progress"
                            steps={this.state.colores.length + 1}
                            position="static"
                            activeStep={activeStepcC + 1}
                        />
                        Se esta cambiando el color de fondo
                    </Grid>
                </Grid>
                {
                    //TODO: el justify y alignItems se encuentran quemados en codigo.
                }
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
                                    <Card
                                        style={{
                                            background: this.state.colores[this.props.cColor],
                                            textAlign: this.state.posicion[this.props.cPosicion],
                                        }}
                                    >
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
export default withStyles(withStyles)(CcardInicial);