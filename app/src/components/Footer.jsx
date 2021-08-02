import { Box, IconButton, Tooltip, Typography } from '@material-ui/core';
import { MailOutlineRounded, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';

import { toggleContact } from '../state';
import { Link } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2, 2, 1, 2),
    [theme.breakpoints.only('xs')]: {
      marginBottom: theme.mixins.toolbar.minHeight,
    },
  },
}));

export default function Footer() {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={styles.root} component="footer">
      <Typography component="div">
        <Link
          footerLink
          rel="license noopener noreferrer"
          href="http://creativecommons.org/publicdomain/zero/1.0/"
          target="_blank"
        >
          CC0
        </Link>{' '}
        <Link
          footerLink
          href="https://github.com/benmneb"
          target="_blank"
          rel="noopener noreferrer"
        >
          benmneb
        </Link>
        <Box display="flex" justifyContent="space-around">
          <Tooltip title="Contact" placement="left">
            <IconButton onClick={() => dispatch(toggleContact())}>
              <MailOutlineRounded />
            </IconButton>
          </Tooltip>
          <Tooltip title="View source" placement="right">
            <IconButton
              href="https://github.com/benmneb/four-noble-truths"
              target="_blank"
              rel="noopener"
            >
              <GitHub />
            </IconButton>
          </Tooltip>
        </Box>
      </Typography>
    </Box>
  );
}
