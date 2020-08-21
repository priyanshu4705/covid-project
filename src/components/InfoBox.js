import React from 'react'
import '../assets/css/InfoBox.css'
import { Card, CardContent, Typography, CardActionArea } from '@material-ui/core'
import Countup from 'react-countup'

function InfoBox({ title, today, total, ...props }) {

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
            <Card onClick={props.onClick} style={{ marginBottom: "1rem", marginRight: window.innerWidth < 990 ? 0 : "1rem" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography className="infobox__title" style={styles}>{title}</Typography>
                        <Typography className="infobox__cases" variant="h6" style={{ fontWeight: "600", fontFamily: "Audiowide" }}>Today +{today && <Countup end={today} />}</Typography>
                        <Typography className="infobox__total" style={{ fontWeight: "600", fontFamily: "Audiowide" }}>Total {total} {title}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default InfoBox
