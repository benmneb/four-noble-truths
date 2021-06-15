import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { StateProvider } from './state/store';
import { theme } from './assets/theme';
import Explanation from './Explanation';
import Footer from './Footer';
import TruthsNav from './TruthsNav';
import TopBar from './TopBar';
import InfoDrawer from './InfoDrawer';

export default function App() {
	return (
		<StateProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<TopBar />
				<TruthsNav />
				<Explanation />
				<Footer />
				<InfoDrawer />
			</ThemeProvider>
		</StateProvider>
	);
}
