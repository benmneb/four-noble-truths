import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';
import { Elaboration } from './index';

const useStyles = makeStyles({
  drawerPaper: {
    width: '75vw',
  },
});

export default function ElaborationDrawer() {
  const styles = useStyles();

  const showElaborationDrawer = useStore(
    (state) => state.showElaborationDrawer
  );
  const toggleElaborationDrawer = useStore(
    (state) => state.toggleElaborationDrawer
  );

  return (
    <SwipeableDrawer
      classes={{ paper: styles.drawerPaper }}
      anchor="right"
      disableDiscovery
      disableSwipeToOpen
      open={showElaborationDrawer}
      onClose={toggleElaborationDrawer}
      onOpen={toggleElaborationDrawer}
    >
      <Elaboration />
    </SwipeableDrawer>
  );
}
