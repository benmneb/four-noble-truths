import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useTheme } from './assets';
import {
  AboutDrawer,
  ErrorPage,
  Explanation,
  Footer,
  TopBar,
  TruthsNav,
} from './components';

const router = createBrowserRouter([
  {
    path: '/:truth?/:elaboration?',
    element: (
      <>
        <TruthsNav />
        <Explanation />
      </>
    ),
    errorElement: <ErrorPage />,
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
