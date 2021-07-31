import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from './assets';
import {
  Explanation,
  Footer,
  TruthsNav,
  TopBar,
  AboutDrawer,
  Contribute,
  Snackbar,
} from './components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <TruthsNav />
      <Explanation />
      <Footer />
      <AboutDrawer />
      <Contribute />
      <Snackbar />
    </ThemeProvider>
  );
}
