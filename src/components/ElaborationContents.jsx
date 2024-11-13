import { Fragment } from 'react';

import clsx from 'clsx';

import { Box, Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { handleContributeClick, TooltipChip, useParamsData } from '../utils';

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

  const { node } = useParamsData();

  if (!node) return null;

  return (
    <Box>
      <Box margin={2} component="figure">
        <Typography className={styles.title}>{node?.text}</Typography>
        {node.elaborations?.map((elaboration, index) => (
          <Fragment key={elaboration.id || index}>
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
            </Box>
            {node?.elaboration?.length > 1 &&
              node?.elaboration?.length - 1 > index && (
                <Divider variant="middle" />
              )}
          </Fragment>
        ))}
      </Box>
      <Box
        className={clsx(styles.elaborationChipBox, {
          [styles.displayNone]: !node?.additionalRefs,
        })}
      >
        <Typography variant="body2">See also:</Typography>
        {node?.additionalRefs?.map((ref) => (
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
        <Button color="primary" onClick={() => handleContributeClick(node)}>
          Contribute
        </Button>
      </Box>
    </Box>
  );
}
