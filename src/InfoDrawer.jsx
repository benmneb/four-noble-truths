import { Box, Link, SwipeableDrawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from './state/store';

const useStyles = makeStyles({
	drawerPaper: {
		width: 290,
		maxWidth: '80vw'
	}
});

export default function InfoDrawer() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

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
			<Box component="section" margin={2}>
				<Box component="header" fontWeight="fontWeightBold">
					<Typography variant="inherit" component="h1" paragraph>
						About
					</Typography>
				</Box>
				<Typography paragraph>
					If the Four Noble Truths are what is realised at enlightenment, then the
					entirity of the Buddhas teachings would stem from the Four Noble Truths, right?
				</Typography>
				<Typography paragraph>
					This site is my attempt to illustrate this, while helping me research the suttas
					of the Pali Canon.
				</Typography>
				<Typography paragraph>
					Any corrections or additions please{' '}
					<Link
						href="https://github.com/benmneb/four-noble-truths"
						target="_blank"
						rel="noopener"
					>
						file an issue or make a pull request on GitHub
					</Link>
					.
				</Typography>
			</Box>
		</SwipeableDrawer>
	);
}
