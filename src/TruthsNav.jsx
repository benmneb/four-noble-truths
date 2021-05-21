import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TruthPaper from './TruthPaper';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	}
}));

export default function FourTruths() {
	const styles = useStyles();

	return (
		<Box className={styles.root} component="nav">
			<TruthPaper number={1}>Suffering</TruthPaper>
			<TruthPaper number={2}>The Origin of Suffering</TruthPaper>
			<TruthPaper number={3}>The Cessation of Suffering</TruthPaper>
			<TruthPaper number={4}>The Path Leading to the Cessation of Suffering</TruthPaper>
		</Box>
	);
}
