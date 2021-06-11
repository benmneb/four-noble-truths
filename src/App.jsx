import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { StateProvider } from './state/store';
import { theme } from './assets/theme';
import Explanation from './Explanation';
import Footer from './Footer';
import TruthsNav from './TruthsNav';
import AppBar from './AppBar';

export default function App() {
	return (
		<StateProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar />
				<TruthsNav />
				<Explanation />
				<Footer />
			</ThemeProvider>
		</StateProvider>
	);
}
