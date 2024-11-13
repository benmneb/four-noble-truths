import { useMediaQuery } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

import { urlify } from '../utils';

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
  const navigate = useNavigate();
  const onlyXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));

  const clickedTruth = useStore((state) => state.clickedTruth);
  const setClickedNode = useStore((state) => state.setClickedNode);
  const toggleElaborationDrawer = useStore(
    (state) => state.toggleElaborationDrawer
  );

  async function handleLabelClick(e, node) {
    e.preventDefault();
    setClickedNode(node);
    navigate(`/${clickedTruth}/${urlify(node.text)}`);
    if (onlyXs) toggleElaborationDrawer();
  }

  function renderTree({ id, text, children, ...props }) {
    return (
      <TreeItem
        key={id}
        nodeId={id}
        label={text}
        onLabelClick={(e) =>
          handleLabelClick(e, { id, text, ...(props || []) })
        }
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
