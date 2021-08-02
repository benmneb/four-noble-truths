import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { toggleAddElaboration } from '../state';

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
  const dispatch = useDispatch();

  const clickedNode = useSelector((state) => state.clickedNode);

  return (
    <Box margin={2}>
      <Typography className={styles.title}>{clickedNode.text}</Typography>
      <Typography paragraph>
        Do you know an appropriate reference elaborating on{' '}
        <Box component="span" fontStyle="italic">
          {clickedNode?.text?.toLowerCase()}
        </Box>{' '}
        from the suttas of the Pali Canon?
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => dispatch(toggleAddElaboration())}
        >
          Contribute
        </Button>
      </Box>
    </Box>
  );
}
