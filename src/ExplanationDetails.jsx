import { useContext } from 'react';

import { Box, Fade, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TreeView, TreeItem } from '@material-ui/lab';
import { ExpandMoreRounded, ChevronRightRounded } from '@material-ui/icons';

import { Context } from './state/store';
import TooltipChip from './utils/TooltipChip';

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
	chipBox: {
		display: 'flex',
		alignItems: 'baseline',
		margin: theme.spacing(2, 0)
	}
}));

function handleSuttaLinkClick(ref) {
	const minRef = ref.toLowerCase().replace(/\s/g, '');
	return window.open(
		`https://suttacentral.net/${minRef}/en/sujato?ref=4NobleTruths`,
		'_blank',
		'noopener noreferrer'
	);
}

export default function ExplanationDetails({ source }) {
	const styles = useStyles();
	const [state, dispatch] = useContext(Context);

	function handleLabelClick(text, elaboration, references) {
		dispatch({
			type: 'CLICKED_ELABORATION',
			clickedElaboration: { text, elaboration, references }
		});
		dispatch({
			type: 'VISIBLE_ELABORATION',
			visibleElaboration: { text, elaboration, references }
		});
	}

	function renderTree(nodes) {
		return (
			<TreeItem
				key={nodes.id}
				nodeId={nodes.id}
				label={nodes.text}
				onLabelClick={() =>
					handleLabelClick(nodes.text, nodes.elaboration, nodes.references)
				}
			>
				{Array.isArray(nodes.children)
					? nodes.children.map((node) => renderTree(node))
					: null}
			</TreeItem>
		);
	}

	function Tree({ data }) {
		return data.map((root) => renderTree(root));
	}

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
								variant="outlined"
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
							defaultCollapseIcon={<ExpandMoreRounded />}
							defaultExpandIcon={<ChevronRightRounded />}
						>
							<Tree data={source.tree} />
						</TreeView>
					</Grid>
					{state.visibleElaboration && (
						<Grid item sm={6}>
							<Box marginTop={source.treeTitle ? 5 : 0}>
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
											- The Buddha
										</Typography>
									</Box>
									<Box className={styles.chipBox}>
										<Typography>See:</Typography>
										{state.visibleElaboration.references.map((ref) => (
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
