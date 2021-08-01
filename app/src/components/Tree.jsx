import { makeStyles, fade } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { useDispatch } from 'react-redux';
import { setClickedNode, setLoading, getElaborations } from '../state';

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

  async function handleLabelClick(e, id, text, additionalRefs) {
    e.preventDefault();
    dispatch(setClickedNode(id, text, additionalRefs));
    dispatch(setLoading(true));
    dispatch(getElaborations(id));
  }

  function renderTree(nodes) {
    const { id, text, seeMore, children } = nodes;

    return (
      <TreeItem
        key={id}
        nodeId={id}
        label={text}
        onLabelClick={(e) => handleLabelClick(e, id, text, seeMore)}
        classes={{ group: styles.treeItemGroup, label: styles.treeItemLabel }}
      >
        {Array.isArray(children)
          ? children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  }

  return data.map((root) => renderTree(root));
}
