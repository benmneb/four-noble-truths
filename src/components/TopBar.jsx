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
    marginBottom: theme.spacing(2.2),
    [theme.breakpoints.only('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
      <AppBar
        position="static"
        color={darkTheme ? 'inherit' : 'primary'}
        elevation={0}
      >
        <Toolbar>
          <Tooltip title="About this site" placement="right">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="about"
              onClick={toggleAboutDrawer}
            >
              <InfoRounded fontSize="small" />
            </IconButton>
          </Tooltip>
          <Typography
            variant="subtitle2"
            component="h1"
            className={styles.title}
          >
            The Four Noble Truths
          </Typography>
          <Tooltip title={tooltip} placement="left">
            <IconButton
              edge="start"
              color="inherit"
              aria-label={tooltip}
              onClick={toggleThemeType}
            >
              {darkTheme ? (
                <BrightnessHighRounded fontSize="small" />
              ) : (
                <Brightness3Rounded fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
