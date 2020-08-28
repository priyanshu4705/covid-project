import React from 'react';
import './assets/css/App.css';
import Routes from './Routes';
import { DataProvider } from './assets/js/DataContext'
import { CssBaseline } from '@material-ui/core'
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <DataProvider>
      <CssBaseline />
        <Routes />
    </DataProvider>
  );
}

export default App;
