import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { ConfirmProvider } from 'material-ui-confirm';

import { useTheme } from './assets';
import {
  AboutDrawer,
  Explanation,
  Footer,
  Snackbar,
  TopBar,
  TruthsNav,
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
        <Snackbar />
      </ConfirmProvider>
    </ThemeProvider>
  );
}
