import React from 'react';
import './assets/css/App.css';
import Routes from './Routes';
import { Paper } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

function App() {

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <div className="app">
          <Routes />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
