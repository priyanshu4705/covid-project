import React from 'react'
import { Button } from "@material-ui/core"
import { Link } from 'react-router-dom'
import '../assets/css/NotFound.css'

function NotFound() {

    const style = {
        fontSize: '2rem',
        fontFamily: "Audiowide"
    }

    return (
        <div className="body">
            <div className="body_content">
                <div className="content">
                    <h2 className="error">404</h2>
                    <h2 className="message">Page Not Found</h2>
                </div>
                <Button component={Link} to="/" style={style} className="btn" >↩ Back Home</Button>
            </div>
        </div>
    )
}

export default NotFound
