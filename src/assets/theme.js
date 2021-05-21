import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'dark'
		}
	})
);
