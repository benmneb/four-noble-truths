import { useContext } from 'react';

import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { GlobalState } from './state/store';

const useStyles = makeStyles({
	drawerPaper: {
		width: 290,
		maxWidth: '80vw'
	}
});

export default function InfoDrawer() {
	const styles = useStyles();
	const [state, dispatch] = useContext(GlobalState);

	function toggleInfoDrawer() {
		dispatch({
			type: 'TOGGLE_INFO_DRAWER',
			showInfoDrawer: !state.showInfoDrawer
		});
	}

	return (
		<SwipeableDrawer
			classes={{ paper: styles.drawerPaper }}
			anchor="left"
			disableDiscovery
			disableSwipeToOpen
			open={state.showInfoDrawer}
			onClose={toggleInfoDrawer}
			onOpen={toggleInfoDrawer}
		>
			about me lol
		</SwipeableDrawer>
	);
}
