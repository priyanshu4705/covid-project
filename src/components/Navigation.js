import React, { useState } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, SwipeableDrawer, List, ListItem } from '@material-ui/core'
import { Menu, Home } from '@material-ui/icons'
import '../assets/css/Navigation.css'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

function Navigation() {

    const [state, setState] = useState(false);
    console.log(state);
    const useStyles = makeStyles({
        list: {
            width: 250,
            fontSize: "1rem",
            fontFamily: "Audiowide",
            backgroundColor: "#1e1e30",
            color: "#007bff",
        },
        
    });

    const classes = useStyles();

    return (
        <Box component="nav">
            <AppBar style={{ backgroundColor: "#1e1e30" }}>
                <Toolbar>
                    <IconButton onClick={() => setState(true)}><Menu fontSize="large" style={{ color: "#bdbdbd" }} /></IconButton>
                    <SwipeableDrawer anchor="left" open={state} onClose={() => setState(false)} onOpen={() => setState(true)}>
                        <div className={classes.list} role="presentation" onClick={() => setState(false)}>
                            <List>
                                <ListItem button key="home" component={Link} to="/">
                                    <Home /> Home
                                </ListItem>
                            </List>
                        </div>
                    </SwipeableDrawer>
                    <Typography variant="h5" style={{ paddingLeft: "1rem", fontFamily: "Audiowide", color: "#bdbdbd" }}>COVID-19 PROJECT</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation
