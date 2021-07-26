import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { StateProvider } from './state/store';
import { theme } from './assets/theme';
import {
  Explanation,
  Footer,
  TruthsNav,
  TopBar,
  InfoDrawer,
} from './components';

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
