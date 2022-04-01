import React from 'react';
import {
	ThemeProvider,
	createTheme
} from '@mui/material/styles';
import ReactDOM from 'react-dom';
import App from './Components/App';

export const themeOptions = {
	palette: {
		type: 'dark',
		primary: {
			main: '#FE5000',
			contrastText: '#000000'
		},
		secondary: {
			main: '#BABFB7',
			contrastText: '#000000'
		},
		warning: {
			main: '#FE5000'
		},
		info: {
			main: '#02243E'
		},
		background: {
			default: '#02243E',
			paper: 'rgba(2, 36, 62, 0.5)'
		},
		text: {
			primary: '#BABFB7',
			secondary: 'rgba(186, 191, 183, 0.7)',
			disabled: 'rgba(186, 191, 183, 0.5)',
			hint: 'rgba(186, 191, 183, 0.3)'
		},
		error: {
			main: '#FE5000'
		},
		success: {
			main: '#FE5000'
		}
	}
};

const theme = createTheme(themeOptions);
ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App/>
	</ThemeProvider>,
	document.getElementById('root')
);
