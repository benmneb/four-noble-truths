import { fade, makeStyles } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { urlify } from '../utils';

const useStyles = makeStyles((theme) => ({
  treeItemGroup: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
  treeItemLabel: {
    borderRadius: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.2),
  },
}));

export default function Tree({ data, expandedNodes }) {
  const styles = useStyles();
  const navigate = useNavigate();
  const { truth } = useParams();

  async function handleLabelClick(e, node) {
    // Open tree automatically on node click, but don't close it.
    if (expandedNodes.includes(node.id)) e.preventDefault();
    navigate(`/${truth}/${urlify(node.text)}`);
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
