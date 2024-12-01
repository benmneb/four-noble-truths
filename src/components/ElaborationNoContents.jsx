import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircleOutlineRounded, RestoreRounded } from '@material-ui/icons';

import { handleContributeClick, useParamsData } from '../utils';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(2),
  },
  displayNone: {
    display: 'none',
  },
  root: {
    width: '100%',
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
}));

export default function ElaborationNoContents() {
  const styles = useStyles();
  const { truth, node } = useParamsData();

  if (!node?.id)
    return (
      <Box margin={2}>
        <Typography paragraph>No elaboration found.</Typography>
        <Typography paragraph variant="subtitle2">
          Check the URL and try again.
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button
            href={`/${truth}`}
            variant="outlined"
            startIcon={<RestoreRounded />}
            size="large"
          >
            Reset
          </Button>
        </Box>
      </Box>
    );

  return (
    <Box className={styles.root}>
      <Typography className={styles.title}>{node?.text}</Typography>
      <Box display="flex" justifyContent="flex-end">
        <Tooltip title="Contribute" placement="left">
          <IconButton
            color="primary"
            onClick={() => handleContributeClick(node)}
            aria-label="Contribute"
            edge="start"
          >
            <AddCircleOutlineRounded />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
