import React, { useContext, useState, useEffect } from 'react'
import '../assets/css/App.css';
import { DataContext } from '../assets/js/DataContext'
import Navigation from './Navigation'
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import Table from './Table'
import InfoBox from './InfoBox';
import LineGraph from './LineGraph'
import { buildChartData } from '../assets/js/Utils'

function Home() {

    const { value1 } = useContext(DataContext);
    const [countries] = value1;

    const [countryData, setCountryData] = useState({});//storing selection data
    const [country, setCountry] = useState("worldwide");//storing dropdown selection
    const [caseType, setCaseType] = useState("cases");
    const [data, setData] = useState({});

    const getGlobalData = async () => {
        await fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => {
                setCountry("worldwide");
                setCountryData(data);
            });
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=60`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let chartData = buildChartData(data, caseType);
                    setData(chartData);
                });
        };

        fetchData();
    }, [caseType]);

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
                    <InfoBox onClick={(e) => setCaseType("cases")} title="Cases" today={countryData.todayCases} total={countryData.cases} />
                    <InfoBox onClick={(e) => setCaseType("recovered")} title="Recovered" today={countryData.todayRecovered} total={countryData.recovered} />
                    <InfoBox onClick={(e) => setCaseType("deaths")} title="Deaths" today={countryData.todayDeaths} total={countryData.deaths} />

                </div>
                {/* Graph with daily data */}
                <div>
                    <Card className="app__graph">
                        <CardContent>
                            <h3 className="app__graphTitle">{countryData.name} Daily new {caseType}</h3>
                            <LineGraph data={data} caseType={caseType}/>
                        </CardContent>
                    </Card>
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
