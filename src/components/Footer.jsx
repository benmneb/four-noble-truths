import { Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub } from '@material-ui/icons';

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
        <IconButton
          href="https://github.com/benmneb/four-noble-truths"
          target="_blank"
          rel="noopener"
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
}
