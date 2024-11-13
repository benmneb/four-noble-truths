import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { handleContributeClick, useParamsData } from '../utils';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(2),
  },
  displayNone: {
    display: 'none',
  },
}));

export default function ElaborationNoContents() {
  const styles = useStyles();
  const { node } = useParamsData();

  return (
    <Box margin={2}>
      <Typography className={styles.title}>{node?.text}</Typography>
      <Typography paragraph>
        Do you know an appropriate reference elaborating on{' '}
        <Box component="span" fontStyle="italic">
          {node?.text?.toLowerCase()}
        </Box>{' '}
        from the suttas of the Pali Canon?
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleContributeClick(node)}
        >
          Contribute
        </Button>
      </Box>
    </Box>
  );
}
