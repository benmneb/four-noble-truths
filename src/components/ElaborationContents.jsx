import { Fragment } from 'react';

import clsx from 'clsx';

import { Box, Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';
import { handleContributeClick, TooltipChip } from '../utils';

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

  const visibleElaboration = useStore((state) => state.visibleElaboration);
  const clickedNode = useStore((state) => state.clickedNode);

  return (
    <Box>
      <Box margin={2} component="figure">
        <Typography className={styles.title}>{clickedNode?.text}</Typography>
        {visibleElaboration?.map((elaboration, index) => (
          <Fragment key={elaboration.for}>
            <Box marginY={2}>
              <Typography component="blockquote">{elaboration.text}</Typography>
              <Typography
                variant="subtitle2"
                component="figcaption"
                className={styles.figCaption}
                gutterBottom
              >
                {elaboration.spokenBy
                  ? `- ${elaboration.spokenBy}`
                  : '- The Buddha'}
                <TooltipChip sutta={elaboration.reference} />
              </Typography>
              {/* Removing this for now cause it's not needed. */}
              {/* <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography color="textSecondary" variant="subtitle2">
                  Added by <b>{elaboration.submittedBy}</b>{' '}
                  {getTimeAgo(new Date(elaboration.createdAt))}
                </Typography>
              </Box> */}
            </Box>
            {visibleElaboration.length > 1 &&
              visibleElaboration.length - 1 > index && (
                <Divider variant="middle" />
              )}
          </Fragment>
        ))}
      </Box>
      <Box
        className={clsx(styles.elaborationChipBox, {
          [styles.displayNone]: !clickedNode?.additionalRefs,
        })}
      >
        <Typography variant="body2">See also:</Typography>
        {clickedNode?.additionalRefs?.map((ref) => (
          <TooltipChip key={ref} sutta={ref} />
        ))}
      </Box>
      <Box
        margin={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="subtitle2">Know another sutta quote?</Typography>
        <Button
          color="primary"
          onClick={() => handleContributeClick(clickedNode)}
        >
          Contribute
        </Button>
      </Box>
    </Box>
  );
}
