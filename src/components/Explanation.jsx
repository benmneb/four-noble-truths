import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ExplanationContents } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: '90vw',
    maxWidth: theme.breakpoints.values.md,
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight * 3.799}px)`,
    [theme.breakpoints.only('xs')]: {
      minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight * 3.2}px)`,
    },
    margin: theme.spacing(0, 3),
    marginBottom: theme.mixins.toolbar.minHeight + theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Explanation() {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Paper className={styles.paper} variant="outlined" component="section">
        <ExplanationContents />
      </Paper>
    </Box>
  );
}
