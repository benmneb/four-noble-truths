import { useContext } from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { GlobalState } from '../state/store';

const useStyles = makeStyles((theme) => ({
	treeItemGroup: {
		marginLeft: 7,
		paddingLeft: 18,
		borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
	}
}));

export function Tree({ data }) {
	const styles = useStyles();
	const dispatch = useContext(GlobalState)[1];

	function handleLabelClick(text, elaboration, references, spokenBy) {
		dispatch({
			type: 'CLICKED_ELABORATION',
			clickedElaboration: { text, elaboration, references, spokenBy }
		});
		dispatch({
			type: 'VISIBLE_ELABORATION',
			visibleElaboration: { text, elaboration, references, spokenBy }
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
				classes={{ group: styles.treeItemGroup }}
			>
				{Array.isArray(nodes.children)
					? nodes.children.map((node) => renderTree(node))
					: null}
			</TreeItem>
		);
	}

	return data.map((root) => renderTree(root));
}
