import React from 'react';
import './assets/css/App.css';
import Routes from './Routes';
import Footer from './components/Footer'
import { DataProvider } from './assets/js/DataContext'

function App() {
  return (
    <DataProvider>
      <div>
        <Routes />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
