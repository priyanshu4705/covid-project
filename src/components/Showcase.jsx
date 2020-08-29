import React, { useContext } from 'react'
import '../assets/css/Showcase.css'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Map, TileLayer, Circle, Popup } from 'react-leaflet'
import { DataContext } from '../assets/js/DataContext'


function Showcase({ caseType = "cases", center, zoom }) {

    const { value1 } = useContext(DataContext);
    const [countries] = value1;

    const casesTypeColors = {
        cases: {
            hex: "#666",
            multiplier: 800,
        },
        recovered: {
            hex: "#7dd71d",
            multiplier: 1200,
        },
        deaths: {
            hex: "#fb4443",
            multiplier: 2000,
        },
    };

    return (
        <div className="showcase">
            <Card>
                <CardContent>
                    <Typography variant="h6">Worldwide Covid Spread</Typography>
                    <div className="map">
                        <Map zoom={zoom} center={center}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {countries.map((country) => (
                                <Circle
                                    center={[country.lat, country.long]}
                                    fillOpacity={0.4}
                                    color={casesTypeColors[caseType].hex}
                                    fillColor={casesTypeColors[caseType].hex}
                                    radius={
                                        Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier
                                    }
                                >
                                    <Popup>
                                        <div className="info-container">
                                            <div className="info-flag" style={{ backgroundImage: `url(${country.flag})` }} />
                                            <div className="info-name">{country.name}</div>
                                            <div className="info-confirmed">Cases: {country.cases}</div>
                                            <div className="info-recovered">Recovered: {country.recovered}</div>
                                            <div className="info-deaths">Deaths: {country.deaths}</div>
                                        </div>
                                    </Popup>
                                </Circle>
                            ))}
                        </Map>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Showcase
