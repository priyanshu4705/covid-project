import React from 'react'
import { Circle, Popup } from 'react-leaflet'


export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const buildGlobalChartData = (data, caseType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[caseType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }
  return chartData;
};

export const buildCountryChartData = (data, type = "cases") => {
  if (data.message) {
    return data;
  }

  let chartData = [];
  let lastpoint;
  let ydata;
  const reqdata = data.timeline[type];

  for (let i in reqdata) {
    if (lastpoint) {
      ydata = reqdata[i] - lastpoint;
      let point = {
        x: i,
        y: ydata < 0 ? 0 : ydata,
      }
      chartData.push(point);
    }
    lastpoint = reqdata[i];
  }

  return chartData;
}

export const colorpallet = {
  "cases": {
    backgroundColor: "",
    color: "#555",
  },
  "recovered": {
    backgroundColor: "rgba(125, 215, 29, 0.4)",
    color: "green",
  },
  "deaths": {
    backgroundColor: "rgba(204, 16, 52, 0.5)",
    color: "#CC1034",
  }
}

export const NavStyle = {
  iconStyle: { fontSize: "1.125rem", color: "#007bff" },
  typoStyle: { fontFamily: "Audiowide", fontSize: "1.125rem" }
};

export const FooterStyle = {
  btn: {
    fontSize: '1.5rem',
    fontFamily: "Audiowide",
    color: "#bdbdbd",
    padding: "0",
  },
  typography: {
    fontSize: "1rem",
    color: "#007bff",
    fontFamily: "Audiowide"
  }
}


export const showDataOnMap = (countries, caseType = "cases") => {

  const casesTypeColors = {
    cases: {
      hex: "#CC1034",
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

  countries.map((country) => (
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
  ))
}