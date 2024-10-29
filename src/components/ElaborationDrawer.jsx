import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { toggleElaborationDrawer } from '../state';

import { Elaboration } from './index';

const useStyles = makeStyles({
  drawerPaper: {
    width: '75vw',
  },
});

export default function ElaborationDrawer() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const showElaborationDrawer = useSelector(
    (state) => state.showElaborationDrawer
  );

  function toggleDrawer() {
    dispatch(toggleElaborationDrawer());
  }

  return (
    <SwipeableDrawer
      classes={{ paper: styles.drawerPaper }}
      anchor="right"
      disableDiscovery
      disableSwipeToOpen
      open={showElaborationDrawer}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Elaboration />
    </SwipeableDrawer>
  );
}
