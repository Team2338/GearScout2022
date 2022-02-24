import React from 'react';
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

  export const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#fe5000',
        contrastText: '#000000',
      },
      secondary: {
        main: '#babfb7',
        contrastText: '#000000',
      },
      warning: {
        main: '#fe5000',
      },
      info: {
        main: '#02243e',
      },
      background: {
        default: '#02243e',
        paper: 'rgba(2,36,62,0.5)',
      },
      text: {
        primary: '#babfb7',
        secondary: 'rgba(186,191,183,0.7)',
        disabled: 'rgba(186,191,183,0.5)',
        hint: 'rgba(186,191,183,0.3)',
      },
      error: { 
        main: '#fe5000',
      },
      success: {
        main: '#fe5000',
      },
    },
  };
  const theme = createTheme(themeOptions);
  ReactDOM.render(
    <ThemeProvider theme = { theme }>
       <App />
    </ThemeProvider>, 
    document.getElementById('root')
 );