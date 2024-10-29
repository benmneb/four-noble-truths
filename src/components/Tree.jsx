import { useMediaQuery } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { useStore } from '../store';

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
  const onlyXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const setClickedNode = useStore((state) => state.setClickedNode);
  const toggleElaborationDrawer = useStore(
    (state) => state.toggleElaborationDrawer
  );

  async function handleLabelClick(e, id, text, additionalRefs) {
    e.preventDefault();
    setClickedNode(id, text, additionalRefs);
    if (onlyXs) toggleElaborationDrawer();
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
