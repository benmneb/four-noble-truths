import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from './state/store';
import Elaboration from './Elaboration';

const useStyles = makeStyles({
	drawerPaper: {
		width: '75vw'
	}
});

export default function ElaborationDrawer() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

	function toggleDrawer() {
		dispatch({
			type: 'TOGGLE_ELABORATION_DRAWER',
			showElaborationDrawer: !state.showElaborationDrawer
		});
	}

	return (
		<SwipeableDrawer
			classes={{ paper: styles.drawerPaper }}
			anchor="right"
			disableDiscovery
			disableSwipeToOpen
			open={state.showElaborationDrawer}
			onClose={toggleDrawer}
			onOpen={toggleDrawer}
		>
			<Elaboration />
		</SwipeableDrawer>
	);
}
