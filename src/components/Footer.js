import React from 'react'
import '../assets/css/Footer.css'
import { Button, Typography } from '@material-ui/core'
import { GitHub, Storage } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Footer() {
    const style = {
        btn: {
            fontSize: '1.5rem',
            fontFamily: "Audiowide",
            color: "#bdbdbd",
            padding: "0 5.7rem",
        },
        typography: {
            fontSize: "1rem",
            color: "#007bff",
            fontFamily: "Audiowide"
        }
    }
    return (
        <div className="footer">
            <Button component={Link} to="/" style={style.btn}>Covid-19 project</Button>
            <Typography variant="subtitle1" style={style.typography}>We stand with everyone fighting on the frontlines</Typography>
            <div className="links">
                <a href="https://github.com/priyanshu4705/covid-project" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                <a href="https://disease.sh/v3/covid-19/countries" target="_blank" rel="noopener noreferrer"><Storage /></a>
            </div>
        </div>
    )
}

export default Footer
