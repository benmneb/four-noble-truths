import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { useTheme } from './assets';
import {
  AboutDrawer,
  Explanation,
  Footer,
  TopBar,
  TruthsNav,
} from './components';

export default function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <TruthsNav />
      <Explanation />
      <Footer />
      <AboutDrawer />
    </ThemeProvider>
  );
}
