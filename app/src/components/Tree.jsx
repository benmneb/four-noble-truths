import { makeStyles, fade } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { useDispatch } from 'react-redux';
import {
  toggleElaborationDrawer,
  setClickedElaboration,
  setVisibleElaboration,
} from '../state';

const useStyles = makeStyles((theme) => ({
  treeItemGroup: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
  treeItemLabel: {
    borderRadius: theme.spacing(0, 2, 2, 0),
  },
}));

export default function Tree(props) {
  const { data } = props;

  const styles = useStyles();
  const dispatch = useDispatch();

  function handleLabelClick(text, elaboration, references, spokenBy) {
    dispatch(
      setClickedElaboration({ text, elaboration, references, spokenBy })
    );
    dispatch(
      setVisibleElaboration({ text, elaboration, references, spokenBy })
    );
    dispatch(toggleElaborationDrawer());
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
