import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { useStore } from '../store';

export function useTheme() {
  const themeType = useStore((state) => state.themeType);

  const theme = createTheme({
    palette: {
      type: themeType,
      primary: {
        main: '#FF9933',
      },
    },
    spacing: 12,
    typography: {
      fontFamily: [
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ].join(','),
      fontSize: 20,
    },
    shape: {
      borderRadius: 16,
    },
    props: {
      MuiSkeleton: {
        animation: 'wave',
      },
    },
    overrides: {
      MuiSkeleton: {
        text: {
          borderRadius: 8,
        },
        rect: {
          borderRadius: 8,
        },
      },
      MuiDialogActions: {
        root: {
          padding: 16,
        },
      },
    },
  });

  return responsiveFontSizes(theme);
}
