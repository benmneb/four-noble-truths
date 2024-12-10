import { useEffect, useState } from 'react';

import { IconButton, Snackbar as MuiSnackbar } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

import { useStore } from '../store';

export default function Snackbars() {
  const snackPack = useStore((state) => state.snackPack);
  const sliceSnackPack = useStore((state) => state.sliceSnackPack);

  const [show, setShow] = useState(false);
  const [latestSnack, setLatestSnack] = useState(undefined);

  useEffect(() => {
    if (snackPack.length && !latestSnack) {
      // Set a new snack when we don't have an active one
      setLatestSnack({ ...snackPack[0] });
      sliceSnackPack();
      setShow(true);
    } else if (snackPack.length && latestSnack && show) {
      // Close an active snack when a new one is added
      setShow(false);
    }
  }, [snackPack, latestSnack, show, sliceSnackPack]);

  function handleClose(event, reason) {
    if (reason !== 'clickaway') {
      setShow(false);
    }
  }

  function handleExited() {
    setLatestSnack(undefined);
  }

  const key = latestSnack ? latestSnack.key : undefined;
  const severity = latestSnack?.severity ? latestSnack.severity : 'info';
  const message = latestSnack ? latestSnack?.message : undefined;
  const autoHideDuration = latestSnack?.disableHide ? null : 3000;
  const actions = [
    <IconButton key="2" size="small" color="inherit" onClick={handleClose}>
      <CloseRounded fontSize="small" />
    </IconButton>,
  ];

  return (
    <MuiSnackbar
      key={key}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={show}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      onExited={handleExited}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={message}
      action={actions}
      severity={severity}
    />
  );
}
