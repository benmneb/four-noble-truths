import MuiSnackbar from '@material-ui/core/Snackbar';

import { useDispatch, useSelector } from 'react-redux';

import { toggleSnackbar } from '../state';

export default function Snackbar() {
  const dispatch = useDispatch();

  const showSnackbar = useSelector((state) => state.showSnackbar);

  function handleClose(event, reason) {
    if (reason !== 'clickaway') {
      dispatch(toggleSnackbar());
    }
  }

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={showSnackbar}
      autoHideDuration={4500}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">Contribution received</span>}
    />
  );
}
