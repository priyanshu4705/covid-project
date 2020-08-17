import React, { useContext } from 'react'
import '../assets/css/App.css';
import {DataContext} from '../assets/js/DataContext'


function Home() {

    const [countries] = useContext(DataContext);

    console.log(countries);
    return (
        <div className="app">
            <div className="app__header"><h1>
                Covid19 Tracker
            </h1></div>
            <div className="app__left"></div>
            <div className="app__right"></div>
        </div>
    )
}

export default Home
