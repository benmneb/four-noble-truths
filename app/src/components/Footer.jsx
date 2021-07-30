import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      marginBottom: theme.mixins.toolbar.minHeight,
    },
  },
}));

export default function Footer() {
  const styles = useStyles();

  return (
    <Box className={styles.root} component="footer">
      <Typography>
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
      </Typography>
    </Box>
  );
}
