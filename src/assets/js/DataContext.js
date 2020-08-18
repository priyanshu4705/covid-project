import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [countries, setCountries] = useState();

    useEffect(() => {
        const getData = async () => {
            await fetch(`https://disease.sh/v3/covid-19/countries`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data);
                    data.forEach(element =>{
                        console.log(element.country, element.cases, element.active, element.recovered, element.deaths);
                    })
                })
        }

        getData();
    }, []);

    return (
        <DataContext.Provider value={[countries]}>
            {props.children}
        </DataContext.Provider>
    );
}