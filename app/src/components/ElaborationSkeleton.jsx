import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(2),
  },
  figCaption: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  elaborationChipBox: {
    display: 'flex',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    margin: theme.spacing(2),
  },
  displayNone: {
    display: 'none',
  },
}));

export default function ElaborationContents() {
  const styles = useStyles();

  return (
    <Box>
      <Box margin={2}>
        <Typography className={styles.title}>
          <Skeleton />
        </Typography>
        <Box marginY={2}>
          <Typography>
            <Skeleton variant="rect" height={100} />
          </Typography>
          <Typography
            variant="subtitle2"
            className={styles.figCaption}
            gutterBottom
          >
            <Skeleton width={150} />
          </Typography>
          <Skeleton width={100} />
        </Box>
      </Box>
      <Box
        margin={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Skeleton width="50%" />
        <Skeleton width="30%" />
      </Box>
    </Box>
  );
}
