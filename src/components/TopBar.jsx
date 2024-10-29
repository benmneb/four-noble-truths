import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Brightness3Rounded,
  BrightnessHighRounded,
  InfoRounded,
} from '@material-ui/icons';

import { useStore } from '../store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.only('xs')]: {
      marginBottom: theme.spacing(3),
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function TopBar() {
  const styles = useStyles();

  const darkTheme = useStore((state) => state.themeType === 'dark');
  const toggleThemeType = useStore((state) => state.toggleThemeType);
  const toggleAboutDrawer = useStore((state) => state.toggleAboutDrawer);

  const tooltip = darkTheme ? 'Switch off dark mode' : 'Switch on dark mode';

  return (
    <Box className={styles.root}>
      <AppBar position="static" color={darkTheme ? 'inherit' : 'primary'}>
        <Toolbar>
          <Tooltip title="About this site">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="about"
              onClick={toggleAboutDrawer}
            >
              <InfoRounded />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" component="h1" className={styles.title}>
            The Four Noble Truths
          </Typography>
          <Tooltip title={tooltip}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label={tooltip}
              onClick={toggleThemeType}
            >
              {darkTheme ? <BrightnessHighRounded /> : <Brightness3Rounded />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
