import React from 'react'
import '../assets/css/About.css'
import Navigation from '../components/Navigation.jsx'
import { Card, CardContent, Divider } from '@material-ui/core'
function About() {
    return (
        <div className="about">
            <Navigation />
            <Card>
                <CardContent>
                    <h1>Priyanshu Srivastava</h1>
                    <h4>18,</h4>
                    <h3>Student, Software developer, Backend</h3>
                    <br />
                    <Divider />
                    <br />
                    <p>- Python, Java, JavaScript, C.</p>
                    <p>- Android, Swing-Awt, Javafx, Tkinter,<br />
                       -  Data Science,  Machine Learning,<br />
                       - Django, ReactJs, </p>
                       <br />
                    <Divider />
                </CardContent>
            </Card>
            <h1 style={{marginTop:"2rem"}}>Site In production</h1>
        </div>
    )
}

export default About
