import React, { createContext, useState, useEffect } from 'react'
import { sortData } from './Utils'

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [countries, setCountries] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch(`https://disease.sh/v3/covid-19/countries`)
                .then(res => res.json())
                .then(data => {
                    const simpledata = data.map((country) => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2,
                            cases: country.cases,
                            todayCases: country.todayCases,
                            recovered: country.recovered,
                            todayRecovered: country.todayRecovered,
                            deaths: country.deaths,
                            todayDeaths: country.todayDeaths,
                            active: country.active,
                            lat: country.countryInfo.lat,
                            long: country.countryInfo.long,
                            flag: country.countryInfo.flag,
                        }
                    ))
                    setCountries(simpledata);
                    const newData = sortData(simpledata);
                    setSortedData(newData);
                });
        }

        getData();
    }, []);

    return (
        <DataContext.Provider value={{ value1: [countries, setCountries], value2: [sortedData, setSortedData] }}>
            {props.children}
        </DataContext.Provider>
    );
}