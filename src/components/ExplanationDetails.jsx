import { useState } from 'react';

import { Box, Fade, Grid, Hidden, Typography } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';

import { useParams } from 'react-router-dom';
import { CloseSquare, MinusSquare, PlusSquare, TooltipChip } from '../utils';
import { Elaboration, ElaborationDrawer, Tree } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(0, 2),
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .quoteBox:first-of-type': {
      marginTop: theme.spacing(5),
      maxWidth: '50ch',
    },
  },
  title: {
    marginTop: theme.spacing(3),
    textWrap: 'balance',
  },
  figCaption: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  treeTitle: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(2),
  },
  treeView: {
    flexGrow: 1,
  },
  treeItemGroup: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
  chipBox: {
    display: 'flex',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    margin: theme.spacing(2, 0),
  },
  elaborationBox: {
    position: 'sticky',
    top: theme.spacing(2),
    margin: (source) => theme.spacing(source.treeTitle ? 5 : 0, 0, 2),
  },
}));

export default function ExplanationDetails(props) {
  const { source } = props;

  const styles = useStyles(source);
  const { elaboration } = useParams();

  const [expandedNodes, setExpandedNodes] = useState([]);

  function handleToggle(event, nodeIds) {
    setExpandedNodes(nodeIds);
  }

  return (
    <Fade in>
      <Box component="article" className={styles.root}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginX={2}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            className={styles.title}
          >
            {source.text}
          </Typography>
          <Box
            key={source.seeMore[0]}
            component="figure"
            className="quoteBox"
            display="flex"
            flexDirection="column"
          >
            <Typography component="blockquote">
              "{source.explanation}"
            </Typography>
            <Typography
              className={styles.figCaption}
              variant="subtitle2"
              component="figcaption"
            >
              - The Buddha
              <TooltipChip sutta={source?.seeMore[0]} />
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {source.treeTitle && (
              <Typography className={styles.treeTitle}>
                {source.treeTitle}:
              </Typography>
            )}
            <nav>
              <TreeView
                className={styles.treeView}
                defaultCollapseIcon={<MinusSquare />}
                defaultExpandIcon={<PlusSquare />}
                defaultEndIcon={<CloseSquare color="disabled" />}
                onNodeToggle={handleToggle}
              >
                <Tree data={source.children} expandedNodes={expandedNodes} />
              </TreeView>
            </nav>
            <Box className={styles.chipBox}>
              <Typography variant="body2">See:</Typography>
              {source.seeMore.map((ref) => (
                <TooltipChip key={ref} sutta={ref} />
              ))}
            </Box>
          </Grid>
          <Hidden xsDown>
            {!!elaboration && (
              <Fade in>
                <Grid item sm={6}>
                  <Box className={styles.elaborationBox}>
                    <Elaboration />
                  </Box>
                </Grid>
              </Fade>
            )}
          </Hidden>
          <Hidden smUp>
            <ElaborationDrawer />
          </Hidden>
        </Grid>
      </Box>
    </Fade>
  );
}
