import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useTheme } from './assets';
import {
  AboutDrawer,
  ErrorPage,
  Explanation,
  TopBar,
  TruthsNav,
} from './components';
import Snackbars from './components/Snackbars';
import { generateClassName } from './utils';

const router = createBrowserRouter([
  {
    path: '/:truth?/:elaboration?',
    element: (
      <>
        <Explanation />
        <TruthsNav />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  const theme = useTheme();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <RouterProvider router={router} />
        <AboutDrawer />
        <Snackbars />
      </ThemeProvider>
    </StylesProvider>
  );
}
