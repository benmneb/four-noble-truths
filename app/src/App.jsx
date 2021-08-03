import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ConfirmProvider } from 'material-ui-confirm';

import { useTheme } from './assets';
import {
  Explanation,
  Footer,
  TruthsNav,
  TopBar,
  AboutDrawer,
  Contribute,
  Snackbar,
  Contact,
} from './components';

export default function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <CssBaseline />
        <TopBar />
        <TruthsNav />
        <Explanation />
        <Footer />
        <AboutDrawer />
        <Contribute />
        <Snackbar />
        <Contact />
      </ConfirmProvider>
    </ThemeProvider>
  );
}
