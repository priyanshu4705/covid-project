import React from 'react'
import '../assets/css/About.css'
import Navigation from '../components/Navigation.jsx'
import { Card, CardContent, Divider } from '@material-ui/core'
import Footer from '../components/Footer'
function About() {
    return (
        <>
            <Navigation />
            <div className="about">
                <Card>
                    <CardContent>
                        <h1>Priyanshu Srivastava</h1>
                        <h4>19,</h4>
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
                <h1 style={{ marginTop: "2rem" }}>Site In production</h1>
            </div>
            <Footer />
        </>
    )
}

export default About
