import React from 'react';
import './assets/css/App.css';
import Routes from './Routes';
import { DataProvider } from './assets/js/DataContext'

function App() {
  return (
    <DataProvider>
      <div>
        <Routes />
      </div>
    </DataProvider>
  );
}

export default App;
