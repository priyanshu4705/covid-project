import React, { useContext } from 'react'
import '../assets/css/Showcase.css'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Map, TileLayer } from 'react-leaflet'
import { showDataOnMap } from '../assets/js/Utils'
import { DataContext } from '../assets/js/DataContext'

function Showcase({ caseType, center, zoom }) {


    const { value1 } = useContext(DataContext);
    const [countries] = value1;

    return (
        <div className="showcase">
            <Card>
                <CardContent>
                    <Typography variant="h6">Worldwide Covid Spread</Typography>
                    <div className="map">
                        <Map zoom={zoom} center={center}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {showDataOnMap(countries, caseType)}
                        </Map>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Showcase
