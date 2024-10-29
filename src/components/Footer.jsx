import { Box, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub } from '@material-ui/icons';

import { CC0 } from '../utils';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      marginBottom: theme.mixins.toolbar.minHeight,
    },
  },
}));

export default function Footer() {
  const styles = useStyles();

  return (
    <Box className={styles.footer} component="footer">
      <Box display="flex" justifyContent="space-around">
        <Tooltip title="License" placement="left">
          <IconButton
            rel="license noopener noreferrer"
            href="http://creativecommons.org/publicdomain/zero/1.0/"
            target="_blank"
          >
            <CC0 />
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
    </Box>
  );
}
