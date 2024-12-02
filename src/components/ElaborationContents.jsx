import { Fragment } from 'react';

import clsx from 'clsx';

import {
  Box,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AddCircleOutlineRounded, LinkRounded } from '@material-ui/icons';
import { useStore } from '../store';
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
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  figure: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  buttonsContainer: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
}));

export default function ElaborationContents() {
  const styles = useStyles();
  const showSnack = useStore((s) => s.showSnack);
  const { node } = useParamsData();

  async function handleCopyToClipboard() {
    const text = window.location;

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        showSnack({
          message: 'Link copied to clipboard',
          severity: 'info',
        });
      } catch (error) {
        showSnack({
          message: 'Could not copy to clipboard.',
          severity: 'error',
        });
        console.error('Error copying to clipboard:', error.message);
      }
    } else {
      showSnack({
        message: 'Could not access clipboard API.',
        severity: 'error',
      });
      console.error('Could not access Clipboard API');
    }
  }

  if (!node?.elaborations?.length) return null;

  return (
    <Box className={styles.root}>
      <Box component="figure" className={styles.figure}>
        <Typography className={styles.title}>{node?.text}</Typography>
        {node.elaborations?.map((elaboration, index) => (
          <Fragment key={elaboration.id || index}>
            <Box marginY={2}>
              <Typography component="blockquote">
                {elaboration?.text?.map((text, i, arr) => (
                  <>
                    <Typography display="inline">{text}</Typography>
                    {i !== arr.length - 1 && (
                      <Typography paragraph>{''}</Typography>
                    )}
                  </>
                ))}
              </Typography>
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
      <Box className={styles.buttonsContainer}>
        <Tooltip title="Contribute">
          <IconButton
            color="primary"
            onClick={() => handleContributeClick(node)}
            aria-label="Contribute"
            edge="start"
          >
            <AddCircleOutlineRounded />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copy link">
          <IconButton
            aria-label="Copy link"
            edge="end"
            onClick={handleCopyToClipboard}
          >
            <LinkRounded />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
