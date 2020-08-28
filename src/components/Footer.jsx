import React from 'react'
import '../assets/css/Footer.css'
import { Button, Typography } from '@material-ui/core'
import { GitHub, Storage, Book, Home, Group} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { FooterStyle } from '../assets/js/Utils'

function Footer() {
    
    return (
        <footer className="footer">
            <Button component={Link} to="/" style={FooterStyle.btn}>Covid-19 project</Button>
            <Typography variant="subtitle1" style={FooterStyle.typography}>We stand with everyone fighting on the frontlines</Typography>
            <div className="links">
                <Link to="/"><Home /></Link>
                <a href="https://github.com/priyanshu4705/covid-project" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                <a href="https://disease.sh/docs/#/" target="_blank" rel="noopener noreferrer"><Storage /></a>
                <Link to="/blog"><Book /></Link>
                <Link to="/about"><Group /></Link>
            </div>
        </footer>
    )
}

export default Footer
