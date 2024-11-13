import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
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

  const showElaborationDrawer = useStore(
    (state) => state.showElaborationDrawer
  );

  const toggleElaborationDrawer = useStore(
    (state) => state.toggleElaborationDrawer
  );

  function handleClose() {
    toggleElaborationDrawer();
    navigate(`/${truth}`);
  }

  return (
    <SwipeableDrawer
      classes={{ paper: styles.drawerPaper }}
      anchor="right"
      disableDiscovery
      disableSwipeToOpen
      open={showElaborationDrawer}
      onClose={handleClose}
      onOpen={toggleElaborationDrawer}
    >
      <Elaboration />
    </SwipeableDrawer>
  );
}
