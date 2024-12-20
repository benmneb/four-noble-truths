import { Box, Button, Fade, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RestoreRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '86vh',
  },
}));

export default function ErrorPage() {
  const styles = useStyles();

  return (
    <Fade in>
      <Box className={styles.root}>
        <Typography paragraph>No page found.</Typography>
        <Typography paragraph variant="subtitle2">
          Check the URL and try again.
        </Typography>
        <Button
          href="/"
          variant="outlined"
          startIcon={<RestoreRounded />}
          size="large"
        >
          Reset
        </Button>
      </Box>
    </Fade>
  );
}
