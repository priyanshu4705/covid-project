import React, { useContext, useState, useEffect } from 'react'
import '../assets/css/App.css';
import { DataContext } from '../assets/js/DataContext'
import Navigation from './Navigation'
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import Table from './Table'
import InfoBox from './InfoBox';

function Home() {

    const { value1 } = useContext(DataContext);
    const [countries] = value1;

    const [countryData, setCountryData] = useState({});//storing selection data
    const [country, setCountry] = useState("worldwide");//storing dropdown selection

    const getGlobalData = async () => {
        await fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => {
                setCountry("worldwide");
                setCountryData(data);
            });
    }
    //first time when the app fires the selected country should be worldwide
    useEffect(() => {
        getGlobalData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);

        if (countryCode === "worldwide") {
            getGlobalData();
        }else{
            countries.forEach(country => {
                if(country.value === countryCode){
                    setCountryData(country);
                }
            });
        }

    };

    return (
        <div className="app">
            <Navigation />
            <div className="app__left">
                {/* App header containing title and dropdown mwnu */}
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
                {/* Info-Boxes showing stats */}
                <div className="app__stats">
                    <InfoBox title="Cases" today={countryData.todayCases} total={countryData.cases} />
                    <InfoBox title="Recovered" today={countryData.todayRecovered} total={countryData.recovered} />
                    <InfoBox title="Deaths" today={countryData.todayDeaths} total={countryData.deaths} />

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
