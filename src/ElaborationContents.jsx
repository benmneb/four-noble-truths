import clsx from 'clsx';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link, TooltipChip } from './utils';
import { useGlobalState } from './state/store';

const useStyles = makeStyles((theme) => ({
	figCaption: {
		marginTop: theme.spacing(1),
		display: 'flex',
		alignItems: 'baseline',
		justifyContent: 'flex-end'
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
	},
	displayNone: {
		display: 'none'
	}
}));

export default function ElaborationContents({ hasContents }) {
	const styles = useStyles();

	const state = useGlobalState()[0];

	return hasContents ? (
		<Box>
			<Box margin={2} component="figure">
				<Typography className={styles.title}>{state.visibleElaboration?.text}</Typography>
				<Typography component="blockquote">
					"{state.visibleElaboration?.elaboration}"
				</Typography>
				<Typography
					variant="subtitle2"
					component="figcaption"
					className={styles.figCaption}
				>
					{state.visibleElaboration?.spokenBy
						? `- ${state.visibleElaboration?.spokenBy}`
						: '- The Buddha'}
					<TooltipChip sutta={state.visibleElaboration?.references?.[0]} />
				</Typography>
			</Box>
			<Box
				className={clsx(styles.elaborationChipBox, {
					[styles.displayNone]:
						state.visibleElaboration?.references?.length < 2 ||
						!state.visibleElaboration?.references
				})}
			>
				<Typography variant="body2">Also:</Typography>
				{state.visibleElaboration?.references?.slice(1).map((ref) => (
					<TooltipChip key={ref} sutta={ref} />
				))}
			</Box>
		</Box>
	) : (
		<Box margin={2}>
			<Typography paragraph>
				Do you know an appropriate reference elaborating on{' '}
				<Box component="span" fontWeight="fontWeightBold">
					{state.visibleElaboration.text.toLowerCase()}
				</Box>{' '}
				from the suttas of the Pali Canon?
			</Typography>
			<Typography>
				If so,{' '}
				<Link
					href="https://github.com/benmneb/four-noble-truths"
					target="_blank"
					rel="noopener"
				>
					file an issue or make a pull request on GitHub
				</Link>{' '}
				to contribute it here.
			</Typography>
		</Box>
	);
}
