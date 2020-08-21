import React from 'react'
import '../assets/css/InfoBox.css'
import { Card, CardContent, Typography } from '@material-ui/core'
import Countup from 'react-countup'

function InfoBox({ title, today, total }) {

    let mycolor = "#000000de";
    if (title === "Recovered") {
        mycolor = "green";
    } else if (title === "Deaths") {
        mycolor = "red";
    }

    const styles = {
        color: mycolor,
        fontWeight: "600",
        fontFamily: "Audiowide",
        fontSize: "1.125rem",
    }

    return (
        <div className="infobox">
            <Card style={{ marginBottom: "1rem", marginRight: window.innerWidth < 990 ? 0 : "1rem" }}>
                <CardContent>
                    <Typography className="infobox__title" style={styles}>{title}</Typography>
                    <h2 className="infobox__cases">Today +{ today && <Countup end={today} />}</h2>
                    <Typography className="infobox__total" style={{ fontWeight: "600", fontFamily: "Audiowide" }}>Total {total} {title}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
