import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#FF9933'
			}
		},
		typography: {
			fontFamily: ['Inter', 'sans-serif'].join(',')
		}
	})
);
