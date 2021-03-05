import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ImgStepper from '../../Data/Stepper.PNG';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 10,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function CenteredGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <br />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h4>Presentacion pagina personalizable</h4>
                        <br />
                        <img 
                        style={{
                            marginLeft: 10,
                            marginRight: 10,
                            marginBottom: 10,
                            marginTop: 10,
                        }}
                        width="90%"
                        height="auto"
                        src={ImgStepper} alt="Stepper" />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
