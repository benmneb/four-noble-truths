import { Fragment } from 'react';

import clsx from 'clsx';

import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { toggleAddElaboration } from '../state';

import { TooltipChip, getTimeAgo } from '../utils';

const useStyles = makeStyles((theme) => ({
  figCaption: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(2),
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

export default function Elaboration() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const visibleElaboration = useSelector((state) => state.visibleElaboration);
  const hoverTruth = useSelector((state) => state.hoverTruth);
  const clickedNode = useSelector((state) => state.clickedNode);

  return (
    <Paper
      variant={smUp ? 'outlined' : 'elevation'}
      elevation={0}
      className={clsx({
        [styles.displayNone]:
          hoverTruth || (!Boolean(clickedNode.text) && !visibleElaboration),
      })}
    >
      <Box
        className={clsx({
          [styles.displayNone]: !visibleElaboration,
        })}
      >
        <Box margin={2} component="figure">
          <Typography className={styles.title}>{clickedNode?.text}</Typography>
          {visibleElaboration?.map((elaboration, index) => (
            <Fragment key={elaboration._id}>
              <Box marginY={2}>
                <Typography component="blockquote">
                  "{elaboration.text}"
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="figcaption"
                  className={styles.figCaption}
                >
                  {elaboration.spokenBy
                    ? `- ${elaboration.spokenBy}`
                    : '- The Buddha'}
                  <TooltipChip sutta={elaboration.reference} />
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                  component="p"
                >
                  Added by <b>{elaboration.submittedBy}</b>{' '}
                  {getTimeAgo(new Date(elaboration.createdAt))}
                </Typography>
              </Box>
              {visibleElaboration.length > 1 &&
                visibleElaboration.length - 1 > index && (
                  <Divider variant="middle" />
                )}
            </Fragment>
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
            onClick={() => dispatch(toggleAddElaboration())}
          >
            Contribute
          </Button>
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
      </Box>
      <Box
        margin={2}
        className={clsx({
          [styles.displayNone]: clickedNode && visibleElaboration,
        })}
      >
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
    </Paper>
  );
}
