import { useMediaQuery } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { useDispatch } from 'react-redux';
import {
  toggleElaborationDrawer,
  setClickedElaboration,
  setVisibleElaboration,
  setClickedNode,
  setLoading,
} from '../state';

import { mongo } from '../assets';

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
  const onlyXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));

  async function handleLabelClick(e, id, text, additionalRefs) {
    e.preventDefault();
    dispatch(setClickedNode(id, text, additionalRefs));
    dispatch(setLoading(true));
    try {
      const response = await mongo.get(id);
      const data = await response.data;
      dispatch(setLoading(false));
      dispatch(setClickedElaboration(data));
      dispatch(setVisibleElaboration(data));
      if (onlyXs) dispatch(toggleElaborationDrawer());
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setClickedElaboration(null));
      dispatch(setVisibleElaboration(null));
      if (onlyXs) dispatch(toggleElaborationDrawer());
    }
  }

  function renderTree(nodes) {
    const { id, text, references, children } = nodes;

    return (
      <TreeItem
        key={id}
        nodeId={id}
        label={text}
        onLabelClick={(e) => handleLabelClick(e, id, text, references)}
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
