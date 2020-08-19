import React, { useContext, useState } from 'react'
import '../assets/css/App.css';
import { DataContext } from '../assets/js/DataContext'
import Navigation from './Navigation'
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import Table from './Table'

function Home() {

    const { value1 } = useContext(DataContext);
    const [countries] = value1;

    const [country, setCountry] = useState("worldwide");

    const onCountryChange = event => {
        const countryCode = event.target.value;
        setCountry(countryCode);
    };

    return (
        <div className="app">
            <Navigation />
            <div className="app__left">
                <div className="app__header">
                    <h1>Covid-19 tracker</h1>
                    <FormControl className="app__dropdown">
                        <Select variant="outlined" value={country} onChange={onCountryChange}>
                            <MenuItem key="worldwide" value="worldwide">Worldwide</MenuItem>
                            {countries.map((country) => (
                                <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="app__right">
                <Card>
                    <CardContent>
                        <h3>Countries with heighest cases</h3>
                        <Table />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Home
