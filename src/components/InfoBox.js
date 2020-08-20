import React from 'react'
import '../assets/css/InfoBox.css'
import { Card, CardContent, Typography } from '@material-ui/core'

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
            <Card>
                <CardContent>
                    <Typography className="infobox__title" style={styles}>{title}</Typography>
                    <h2 className="infobox__cases">Today + {today}</h2>
                    <Typography className="infobox__total" style={{ fontWeight: "600", fontFamily: "Audiowide" }}>Total {total} {title}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
