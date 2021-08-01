import { Button, IconButton, Snackbar as MuiSnackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { CloseRounded } from '@material-ui/icons';

import { useDispatch, useSelector } from 'react-redux';

import { getElaborations, toggleSnackbar } from '../state';
import { mongo } from '../assets';

export default function Snackbar() {
  const dispatch = useDispatch();

  const showSnackbar = useSelector((state) => state.showSnackbar);
  const clickedNodeId = useSelector((state) => state.clickedNode.for);

  function handleClose(event, reason) {
    if (reason !== 'clickaway') {
      dispatch(toggleSnackbar());
    }
  }

  async function handleUndo() {
    try {
      await mongo.remove(showSnackbar);
      dispatch(getElaborations(clickedNodeId));
      handleClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={Boolean(showSnackbar)}
      autoHideDuration={5000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
    >
      <Alert
        id="message-id"
        elevation={6}
        variant="filled"
        severity="success"
        action={[
          <Button key="1" color="inherit" size="small" onClick={handleUndo}>
            UNDO
          </Button>,
          <IconButton key="2" size="small" onClick={handleClose}>
            <CloseRounded fontSize="small" />
          </IconButton>,
        ]}
      >
        Contribution received
      </Alert>
    </MuiSnackbar>
  );
}
