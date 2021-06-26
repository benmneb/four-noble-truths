import { BottomNavigation, BottomNavigationAction, Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from './state/store';
import TruthPaper from './TruthPaper';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.only('xs')]: {
			position: 'fixed',
			bottom: 0,
			left: 0,
			right: 0,
			zIndex: theme.zIndex.mobileStepper
		},
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
		}
	},
	bottomNav: {
		boxShadow:
			'0px -2px 4px -1px rgba(0,0,0,0.2),0px -4px 5px 0px rgba(0,0,0,0.14),0px -1px 10px 0px rgba(0,0,0,0.12)'
	},
	// below for BottomNavLabel()
	paper: {
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	numberBox: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	number: {
		fontSize: '3rem',
		color: theme.palette.background.default,
		fontWeight: theme.typography.fontWeightBold,
		lineHeight: 1,
		webkitTouchCallout: 'none',
		webkitUserSelect: 'none',
		khtmlUserSelect: 'none',
		mozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	text: {
		zIndex: theme.zIndex.mobileStepper
	}
}));

function BottomNavLabel({ label, number }) {
	const styles = useStyles();

	return (
		<Box component="span" className={styles.paper}>
			<Box className={styles.numberBox}>
				<Box component="span" className={styles.number}>
					{number}
				</Box>
			</Box>
			<Box component="span" className={styles.text}>
				{label}
			</Box>
		</Box>
	);
}

export default function TruthsNav() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

	function handleMobileNavChange(number) {
		dispatch({ type: 'HOVER_TRUTH', number: 0 });

		if (number !== state.clickedTruth) {
			dispatch({ type: 'CLICKED_TRUTH', number });
		} else {
			dispatch({ type: 'CLICKED_TRUTH', number: 0 });
		}

		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	return (
		<Box className={styles.root} component="nav">
			<Hidden smUp>
				<BottomNavigation
					className={styles.bottomNav}
					value={state.clickedTruth}
					onChange={(event, value) => handleMobileNavChange(value)}
					showLabels
				>
					<BottomNavigationAction
						label={<BottomNavLabel label="Suffering" number={1} />}
						value={1}
					/>
					<BottomNavigationAction
						label={<BottomNavLabel label="Origin" number={2} />}
						value={2}
					/>
					<BottomNavigationAction
						label={<BottomNavLabel label="Cessation" number={3} />}
						value={3}
					/>
					<BottomNavigationAction
						label={<BottomNavLabel label="Path" number={4} />}
						value={4}
					/>
				</BottomNavigation>
			</Hidden>
			<Hidden xsDown>
				<TruthPaper label="Suffering" number={1} />
				<TruthPaper label="The Origin of Suffering" number={2} />
				<TruthPaper label="The Cessation of Suffering" number={3} />
				<TruthPaper label="The Path Leading to the Cessation of Suffering" number={4} />
			</Hidden>
		</Box>
	);
}
