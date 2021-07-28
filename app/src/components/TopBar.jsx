import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
} from '@material-ui/core';
import { InfoRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';

import { SettingsMenu } from './index';
import { toggleAboutDrawer } from '../state';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export default function TopBar() {
  const styles = useStyles();
  const dispatch = useDispatch();

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
          <SettingsMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
