import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';

const cookies = new Cookies();
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        //background: "#03a9f4",
        color: "inherit",
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar(props) {
    const classes = useStyles();

    const cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('nombreusuario', { path: "/" });
        cookies.remove('rol', { path: "/" });
        cookies.remove('fechacreacion', { path: "/" });
        cookies.remove('primernombre', { path: "/" });
        cookies.remove('primerapellido', { path: "/" });
        window.location.href = "./";
    }
    const Volver = () => {
        window.location.href = "./user";
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static" >
                <Toolbar color="primary">
                {/* <Toolbar style={{ backgroundColor: '#03a9f4' }}> */}
                    <Avatar>
                        {
                            cookies.get('rol')=="admin"?<FolderIcon />:<PageviewIcon />
                        }
                    </Avatar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {cookies.get('primernombre')}
                    </Typography>
                    {
                        cookies.get('rol')=="user"?
                        <>
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <Button color="inherit" onClick={() => Volver()}>Volver</Button>
                            </div>
                        </>
                        :
                        <></>
                        
                    }
                    {/* <div className={classes.grow} /> */}
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" onClick={() => cerrarSesion()}>Cerrar sesión</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <Button color="inherit" onClick={() => cerrarSesion()}>Cerrar sesión</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
