import { Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
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
          edge="start"
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
}
