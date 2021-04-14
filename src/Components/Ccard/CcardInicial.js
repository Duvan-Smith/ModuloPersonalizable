import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
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
        const steps = this.getSteps();
        return (
            <>
                <br />
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
                    justify={this.state.posicionT[this.props.cPosicion2]}
                    alignItems={this.state.posicionT[this.props.cPosicion2]}
                >
                    {
                        activeStep === steps.length ? (
                            <Paper style={{
                                margin: 20,
                                justifyContent: "center",
                                textAlign: "center",
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1,
                                width: "110%",
                            }}>
                                <div class="row" style={{
                                    margin: 20,
                                    justifyContent: "center",
                                    textAlign: "center",
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexGrow: 1,
                                    width: "110%",
                                }}>

                                    <div class="col-12" style={{ margin: 20, }}>
                                        <Typography className={classes.instructions}>Configuracion finalizada</Typography>
                                    </div>
                                    <div class="col-12" style={{ margin: 10, }}>
                                        <Button>Ver mi componente</Button>
                                    </div>
                                </div>
                            </Paper>
                        )
                            :
                            (
                                <Grid item xs={10}>
                                    <Card
                                        style={{
                                            background: this.props.color,
                                            // background: this.state.colores[this.props.cColor],
                                            // textAlign: this.state.posicion[this.props.cPosicion],
                                            textAlign: this.props.posicionLetra,
                                        }}
                                    >
                                        <Typography gutterBottom
                                            style={{
                                                marginLeft: 20,
                                                marginRight: 20,
                                                marginBottom: 20,
                                                marginTop: 20,
                                            }}
                                            // variant={this.state.tamano[this.props.cTamano].titulo}
                                            variant={this.props.titulo}
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
                                            // width={this.state.tamano[this.props.cTamano].imagen}
                                            width={this.props.imagen}
                                            height="auto"
                                            src={this.state.contenidos[this.props.cContenido].imagen}
                                        >
                                        </img>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    // fontSize: this.state.tamano[this.props.cTamano].parrafos,
                                                    fontSize: this.props.parrafos,
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
                                                    // variant={this.state.tamano[this.props.cTamano].subtitulo}
                                                    variant={this.props.subtitulo}
                                                >
                                                    {this.state.contenidos[this.props.cContenido].subtitulo}
                                                </Typography>
                                                <br />
                                                <Typography paragraph
                                                    style={{
                                                        // fontSize: this.state.tamano[this.props.cTamano].parrafos,
                                                        fontSize: this.props.parrafos,
                                                    }}
                                                >
                                                    {this.state.contenidos[this.props.cContenido].parrafo2}
                                                </Typography>
                                                <br />
                                                <Typography paragraph
                                                    style={{
                                                        // fontSize: this.state.tamano[this.props.cTamano].parrafos,
                                                        fontSize: this.props.parrafos,
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