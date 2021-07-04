import { makeStyles, fade } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { useGlobalState } from './state/store';

const useStyles = makeStyles((theme) => ({
	treeItemGroup: {
		marginLeft: 7,
		paddingLeft: 18,
		borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
	},
	treeItemLabel: {
		borderRadius: theme.spacing(0, 2, 2, 0)
	}
}));

export default function Tree({ data }) {
	const styles = useStyles();
	const dispatch = useGlobalState()[1];

	function handleLabelClick(text, elaboration, references, spokenBy) {
		dispatch({
			type: 'CLICKED_ELABORATION',
			clickedElaboration: { text, elaboration, references, spokenBy }
		});
		dispatch({
			type: 'VISIBLE_ELABORATION',
			visibleElaboration: { text, elaboration, references, spokenBy }
		});
		dispatch({
			type: 'TOGGLE_ELABORATION_DRAWER',
			showElaborationDrawer: true
		});
	}

	function renderTree(nodes) {
		return (
			<TreeItem
				key={nodes.id}
				nodeId={nodes.id}
				label={nodes.text}
				onLabelClick={(e) => {
					e.preventDefault();
					handleLabelClick(
						nodes.text,
						nodes.elaboration,
						nodes.references,
						nodes.spokenBy
					);
				}}
				classes={{ group: styles.treeItemGroup, label: styles.treeItemLabel }}
			>
				{Array.isArray(nodes.children)
					? nodes.children.map((node) => renderTree(node))
					: null}
			</TreeItem>
		);
	}

	return data.map((root) => renderTree(root));
}
