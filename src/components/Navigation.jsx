import React, { useState } from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import {
    Menu,
    Home,
    Book,
    People,
    GitHub,
    Storage
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { NavStyle } from '../assets/js/Utils'

function Navigation() {

    const [state, setState] = useState(false);
    const useStyles = makeStyles({
        list: {
            width: "15rem",
            height: "100vh",
            backgroundColor: "#1e1e30",
            color: "#007bff",
            paddingTop: "3rem",
        },
        item: {
            padding: "2rem 1rem",
        },
        link: {
            textDecoration: "none",
            color: "#007bff",
        },
        typo: {
            paddingLeft: "1rem",
            fontFamily: "Audiowide",
            color: "#bdbdbd",
        }
    });

    const classes = useStyles();

    return (
        <>
            <Box component="nav">
                <AppBar style={{ backgroundColor: "#1e1e30" }}>
                    <Toolbar>
                        <IconButton onClick={() => setState(true)}><Menu fontSize="large" style={{ color: "#bdbdbd" }} /></IconButton>
                        <Drawer anchor="left" open={state} onClose={() => setState(false)} >
                            <div className={classes.list} role="presentation" onClick={() => setState(false)}>
                                <List>
                                    <ListItem button className={classes.item} component={Link} to="/" key="home">
                                        <ListItemIcon style={NavStyle.iconStyle}><Home /></ListItemIcon>
                                        <ListItemText><Typography style={NavStyle.typoStyle}>
                                            Home
                                        </Typography></ListItemText>
                                    </ListItem>
                                    <ListItem button className={classes.item} component={Link} to="/blog" key="blog">
                                        <ListItemIcon style={NavStyle.iconStyle}><Book /></ListItemIcon>
                                        <ListItemText><Typography style={NavStyle.typoStyle}>
                                            Blog
                                        </Typography></ListItemText>
                                    </ListItem>
                                    <ListItem button className={classes.item} component={Link} to="/about" key="about">
                                        <ListItemIcon style={NavStyle.iconStyle}><People /></ListItemIcon>
                                        <ListItemText><Typography style={NavStyle.typoStyle}>
                                            About us
                                        </Typography></ListItemText>
                                    </ListItem>
                                    <a className={classes.link} href="https://github.com/priyanshu4705/covid-project" target="_blank" rel="noopener noreferrer">
                                        <ListItem button className={classes.item} key="github">
                                            <ListItemIcon style={NavStyle.iconStyle}><GitHub /></ListItemIcon>
                                            <ListItemText><Typography style={NavStyle.typoStyle}>
                                                GitHub
                                            </Typography></ListItemText>
                                        </ListItem>
                                    </a>
                                    <a className={classes.link} href="https://disease.sh/docs/#/" target="_blank" rel="noopener noreferrer">
                                        <ListItem button className={classes.item} key="api">
                                            <ListItemIcon style={NavStyle.iconStyle}><Storage /></ListItemIcon>
                                            <ListItemText><Typography style={NavStyle.typoStyle}>
                                                API
                                            </Typography></ListItemText>
                                        </ListItem>
                                    </a>
                                </List>
                            </div>
                        </Drawer>
                        <Typography variant="h5" className={classes.typo}>COVID-19 PROJECT</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navigation