import { useState, useEffect } from 'react';

import { IconButton, Snackbar as MuiSnackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { CloseRounded } from '@material-ui/icons';

import { useDispatch, useSelector } from 'react-redux';

import { getElaborations, setSnackPack, sliceSnackPack } from '../state';
import { mongo } from '../assets';
import { LoadingButton } from '../utils';

export default function Snackbar() {
  const dispatch = useDispatch();

  const snackPack = useSelector((state) => state.snackPack);
  const clickedNodeId = useSelector((state) => state.clickedNode.for);

  const [show, setShow] = useState(false);
  const [latestSnack, setLatestSnack] = useState(undefined);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (snackPack.length && !latestSnack) {
      // Set a new snack when we don't have an active one
      setLatestSnack({ ...snackPack[0] });
      dispatch(sliceSnackPack());
      setShow(true);
    } else if (snackPack.length && latestSnack && show) {
      // Close an active snack when a new one is added
      setShow(false);
    }
  }, [snackPack, latestSnack, show, dispatch]);

  function handleClose(event, reason) {
    if (reason !== 'clickaway') {
      setShow(false);
    }
  }

  async function handleUndo() {
    setPending(true);
    try {
      await mongo.delete(latestSnack.newContributionId);
      dispatch(getElaborations(clickedNodeId));
      dispatch(setSnackPack('Contribution removed'));
      handleClose();
    } catch (error) {
      console.error(error);
    }
  }

  function handleExited() {
    setLatestSnack(undefined);
    setPending(false);
  }

  const key = latestSnack ? latestSnack.key : undefined;
  const severity = latestSnack?.newContributionId ? 'success' : 'info';
  const message = latestSnack ? latestSnack?.message : undefined;
  const actions = [
    ...(latestSnack?.newContributionId
      ? [
          <LoadingButton
            key="1"
            color="inherit"
            size="small"
            onClick={handleUndo}
            pending={pending}
          >
            UNDO
          </LoadingButton>,
        ]
      : []),
    <IconButton key="2" size="small" onClick={handleClose}>
      <CloseRounded fontSize="small" />
    </IconButton>,
  ];

  return (
    <MuiSnackbar
      key={key}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={show}
      autoHideDuration={6000}
      onClose={handleClose}
      onExited={handleExited}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
    >
      <Alert
        id="message-id"
        elevation={6}
        variant="filled"
        severity={severity}
        action={actions}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
}
