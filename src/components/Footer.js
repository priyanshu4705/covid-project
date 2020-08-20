import React from 'react'
import '../assets/css/Footer.css'
import { Button, Typography } from '@material-ui/core'
import { GitHub, Storage, Book, Home, Group} from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Footer() {
    const style = {
        btn: {
            fontSize: '1.5rem',
            fontFamily: "Audiowide",
            color: "#bdbdbd",
            padding: "0",
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
                <Link to="/"><Home /></Link>
                <a href="https://github.com/priyanshu4705/covid-project" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                <a href="https://disease.sh/docs/" target="_blank" rel="noopener noreferrer"><Storage /></a>
                <Link to="/blog"><Book /></Link>
                <Link to="/about"><Group /></Link>
            </div>
        </div>
    )
}

export default Footer
