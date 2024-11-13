import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useNavigate, useParams } from 'react-router-dom';
import { useParamsData } from '../utils';
import { Elaboration } from './index';

const useStyles = makeStyles({
  drawerPaper: {
    width: '75vw',
  },
});

export default function ElaborationDrawer() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { truth } = useParamsData();
  const { explanation } = useParams();

  function handleClose() {
    navigate(`/${truth}`);
  }

  return (
    <SwipeableDrawer
      classes={{ paper: styles.drawerPaper }}
      anchor="right"
      disableDiscovery
      disableSwipeToOpen
      open={!!explanation}
      onClose={handleClose}
    >
      <Elaboration />
    </SwipeableDrawer>
  );
}
