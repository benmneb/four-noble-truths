import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ExplanationContents from './ExplanationContents';
import { useGlobalState } from './state/store';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: '90vw',
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
		<Paper className={styles.paper} variant="outlined" component="section">
			<ExplanationContents show={whatToShow} />
		</Paper>
	);
}
