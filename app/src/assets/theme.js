import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

export function useTheme() {
  const themeType = useSelector((state) => state.themeType);

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: themeType,
        primary: {
          main: '#FF9933',
        },
      },
      typography: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
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
      },
    })
  );
}
