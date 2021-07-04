import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ExplanationContents } from './index';
import { useGlobalState } from '../state';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center'
	},
	paper: {
		width: '90vw',
		maxWidth: theme.breakpoints.values.md,
		minHeight: '70vh',
		margin: `${theme.spacing(4)}px 5vw 0 5vw`,
		display: 'flex',
		justifyContent: 'center'
	}
}));

export default function Explanation() {
	const styles = useStyles();
	const state = useGlobalState()[0];

	const whatToShow = state.hoverTruth ? state.hoverTruth : state.clickedTruth;

	return (
		<Box className={styles.root}>
			<Paper className={styles.paper} variant="outlined" component="section">
				<ExplanationContents show={whatToShow} />
			</Paper>
		</Box>
	);
}
