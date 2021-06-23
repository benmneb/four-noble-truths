import { Box, Link, SwipeableDrawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from './state/store';
import { TooltipChip } from './utils';

const useStyles = makeStyles({
	drawerPaper: {
		width: 290,
		maxWidth: '80vw'
	},
	figCaption: {
		display: 'flex',
		alignItems: 'baseline',
		justifyContent: 'end'
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
					If the Four Noble Truths are what is realised by arahants...
				</Typography>
				<Box component="figure" margin={2}>
					<Typography component="blockquote">
						"Because of not truly seeing the four noble truths, we have transmigrated for
						a long time from one rebirth to the next. But now that these truths have been
						seen, the attachment to rebirth is eradicated. The root of suffering is cut
						off, now there are no more future lives."
					</Typography>
					<Typography
						paragraph
						variant="subtitle2"
						component="figcaption"
						className={styles.figCaption}
					>
						- The Buddha
						<TooltipChip sutta="DN 16" />
					</Typography>
				</Box>
				<Typography paragraph>
					...then the entirity of the Buddhas teachings would stem from the Four Noble
					Truths, right?
				</Typography>
				<Box component="figure" margin={2}>
					<Typography component="blockquote">
						"The footprints of all creatures that walk can fit inside an elephant’s
						footprint, so an elephant’s footprint is said to be the biggest of them all.
						In the same way, all skillful qualities can be included in the four noble
						truths."
					</Typography>
					<Typography
						paragraph
						variant="subtitle2"
						component="figcaption"
						className={styles.figCaption}
					>
						- Ven. Sariputta
						<TooltipChip sutta="MN 28" />
					</Typography>
				</Box>
				<Typography paragraph>
					This site is my attempt to illustrate and organise this, while helping me study
					the suttas of the Pali Canon.
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
