import { Fragment } from 'react';

import clsx from 'clsx';

import {
  Box,
  Button,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { FlagRounded } from '@material-ui/icons/';
import { makeStyles } from '@material-ui/core/styles';

import { useConfirm } from 'material-ui-confirm';

import { useSelector, useDispatch } from 'react-redux';
import { setSnackPack, toggleAddElaboration } from '../state';

import { TooltipChip, getTimeAgo } from '../utils';
import { mongo } from '../assets';

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
  const dispatch = useDispatch();
  const confirm = useConfirm();

  const visibleElaboration = useSelector((state) => state.visibleElaboration);
  const clickedNode = useSelector((state) => state.clickedNode);

  async function sendFlag(flaggedElaboration) {
    dispatch(
      setSnackPack('Letting admin know... Please wait... ⏳', {
        disableHide: true,
      })
    );
    try {
      const request = await mongo.put('/flag', flaggedElaboration);
      const response = await request.data;
      if (response.success) {
        dispatch(setSnackPack(response.message, { severity: 'success' }));
      }
    } catch (error) {
      console.error('sendFlag error:', error);
      dispatch(
        setSnackPack('Could not flag. Please try again soon', {
          severity: 'error',
        })
      );
    }
  }

  function handleFlagClick(flaggedElaboration) {
    confirm({
      title: 'Flag as inappropriate',
      description:
        'Are you sure you want to flag this elaboration as spam, off-topic, or otherwise inappropriate?',
      confirmationText: 'Confirm',
      confirmationButtonProps: {
        variant: 'outlined',
      },
    })
      .then(() => sendFlag(flaggedElaboration))
      .catch(() => console.log('cancelled'));
  }

  return (
    <Box>
      <Box margin={2} component="figure">
        <Typography className={styles.title}>{clickedNode?.text}</Typography>
        {visibleElaboration?.map((elaboration, index) => (
          <Fragment key={elaboration._id}>
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
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography color="textSecondary" variant="subtitle2">
                  Added by <b>{elaboration.submittedBy}</b>{' '}
                  {getTimeAgo(new Date(elaboration.createdAt))}
                </Typography>
                {elaboration.submittedBy !== 'benmneb' && (
                  <Tooltip title="Flag as inappropriate" placement="left">
                    <IconButton
                      size="small"
                      onClick={() => handleFlagClick(elaboration)}
                    >
                      <FlagRounded fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
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
  );
}
