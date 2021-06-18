import { Box, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { TooltipChip } from './utils';
import { useGlobalState } from './state/store';

const useStyles = makeStyles((theme) => ({
	figCaption: {
		marginTop: theme.spacing(1),
		display: 'flex',
		alignItems: 'baseline',
		justifyContent: 'end'
	},
	title: {
		fontWeight: theme.typography.fontWeightMedium,
		marginBottom: theme.spacing(2)
	},
	elaborationChipBox: {
		display: 'flex',
		alignItems: 'baseline',
		flexWrap: 'wrap',
		margin: theme.spacing(2)
	}
}));

export default function Elaboration() {
	const styles = useStyles();

	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const state = useGlobalState()[0];

	return (
		<Paper variant={smUp ? 'outlined' : 'elevation'} elevation={0}>
			<Box margin={2} component="figure">
				<Typography className={styles.title}>{state.visibleElaboration.text}</Typography>
				<Typography component="blockquote">
					"{state.visibleElaboration.elaboration}"
				</Typography>
				<Typography
					variant="subtitle2"
					component="figcaption"
					className={styles.figCaption}
				>
					{state.visibleElaboration.spokenBy
						? `- ${state.visibleElaboration.spokenBy}`
						: '- The Buddha'}
				</Typography>
			</Box>
			<Box className={styles.elaborationChipBox}>
				<Typography>See:</Typography>
				{state.visibleElaboration.references?.map((ref) => (
					<TooltipChip key={ref} sutta={ref} />
				))}
			</Box>
		</Paper>
	);
}
