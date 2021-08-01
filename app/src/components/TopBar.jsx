import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  InfoRounded,
  Brightness3Rounded,
  BrightnessHighRounded,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';

import { toggleThemeType, toggleAboutDrawer } from '../state';

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
  const dispatch = useDispatch();

  const themeType = useSelector((state) => state.themeType);

  const tooltip =
    themeType === 'dark' ? 'Switch off dark mode' : 'Switch on dark mode';

  return (
    <Box className={styles.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Tooltip title="About this site">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="about"
              onClick={() => dispatch(toggleAboutDrawer())}
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
              onClick={() => dispatch(toggleThemeType())}
            >
              {themeType === 'dark' ? (
                <BrightnessHighRounded />
              ) : (
                <Brightness3Rounded />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
