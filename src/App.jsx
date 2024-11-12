import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useTheme } from './assets';
import {
  AboutDrawer,
  Explanation,
  ExplanationContents,
  Footer,
  TopBar,
  TruthsNav,
} from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <TruthsNav />
        <Explanation />
      </>
    ),
    // errorElement: <ErrorPage />,
  },
  {
    path: '/:truth',
    element: (
      <>
        <TruthsNav />
        <Explanation />
      </>
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/:truth/:explanation',
        element: <ExplanationContents />,
        // errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <RouterProvider router={router} />
      {/* <TruthsNav />
      <Explanation /> */}
      <Footer />
      <AboutDrawer />
    </ThemeProvider>
  );
}
