import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useTheme } from './assets';
import {
  AboutDrawer,
  Explanation,
  Footer,
  TopBar,
  TruthsNav,
} from './components';

const router = createBrowserRouter([
  {
    path: '/:truth?/:explanation?',
    element: (
      <>
        <TruthsNav />
        <Explanation />
      </>
    ),
  },
]);

export default function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <RouterProvider router={router} />
      <Footer />
      <AboutDrawer />
    </ThemeProvider>
  );
}
