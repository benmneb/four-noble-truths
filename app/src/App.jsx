import { useEffect } from 'react';

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
import { mongo } from './assets';

export default function App() {
  const theme = useTheme();

  useEffect(() => {
    (async function () {
      try {
        await mongo.get('/woke');
      } catch {
        console.log('✅ Server is live');
      }
    })();
  }, []);

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
