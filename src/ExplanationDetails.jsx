import { useContext } from 'react';

import { Box, Fade, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';

import { GlobalState } from './state/store';
import { TooltipChip, handleSuttaLinkClick, Tree } from './utils';
import { MinusSquare, PlusSquare, CloseSquare } from './utils/Icons';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		margin: theme.spacing(0, 2),
		'& > *': {
			marginTop: theme.spacing(2)
		}
	},
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
	treeView: {
		flexGrow: 1
	},
	treeItemGroup: {
		marginLeft: 7,
		paddingLeft: 18,
		borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
	},
	chipBox: {
		display: 'flex',
		alignItems: 'baseline',
		flexWrap: 'wrap',
		margin: theme.spacing(2, 0)
	},
	elaborationBox: {
		position: 'sticky',
		top: theme.spacing(2)
	},
	elaborationChipBox: {
		display: 'flex',
		alignItems: 'baseline',
		flexWrap: 'wrap',
		margin: theme.spacing(2)
	}
}));

export default function ExplanationDetails({ source }) {
	const styles = useStyles();
	const state = useContext(GlobalState)[0];

	return (
		<Fade in>
			<Box component="article" className={styles.root}>
				<Typography variant="h4" component="h1">
					{source.truth}
				</Typography>
				{source.quotes.map((quote) => (
					<Box key={quote.reference} component="figure">
						<Typography component="blockquote">"{quote.text}"</Typography>
						<Typography
							className={styles.figCaption}
							variant="subtitle2"
							component="figcaption"
						>
							- The Buddha
							<TooltipChip
								label={quote.reference}
								handleClick={() => handleSuttaLinkClick(quote.reference)}
							/>
						</Typography>
					</Box>
				))}
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						{source.treeTitle && (
							<Typography className={styles.title}>{source.treeTitle}:</Typography>
						)}
						<TreeView
							className={styles.treeView}
							defaultCollapseIcon={<MinusSquare />}
							defaultExpandIcon={<PlusSquare />}
							defaultEndIcon={<CloseSquare />}
						>
							<Tree data={source.tree} />
						</TreeView>
					</Grid>
					{state.visibleElaboration && (
						<Grid item sm={6}>
							<Box marginTop={source.treeTitle ? 5 : 0} className={styles.elaborationBox}>
								<Paper variant="outlined">
									<Box margin={2} component="figure">
										<Typography className={styles.title}>
											{state.visibleElaboration.text}
										</Typography>
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
											<TooltipChip
												key={ref}
												label={ref}
												handleClick={() => handleSuttaLinkClick(ref)}
											/>
										))}
									</Box>
								</Paper>
							</Box>
						</Grid>
					)}
				</Grid>
				<Box className={styles.chipBox}>
					<Typography>See:</Typography>
					{source.seeMore.map((ref) => (
						<TooltipChip
							key={ref}
							label={ref}
							handleClick={() => handleSuttaLinkClick(ref)}
						/>
					))}
				</Box>
			</Box>
		</Fade>
	);
}
