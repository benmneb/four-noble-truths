import { Box, Fade, Typography, Grid, Hidden } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { TreeView } from '@material-ui/lab';

import { useSelector } from 'react-redux';

import { TooltipChip, MinusSquare, PlusSquare, CloseSquare } from '../utils';
import { Tree, Elaboration, ElaborationDrawer } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(0, 2),
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .quoteBox:first-of-type': {
      marginTop: theme.spacing(5),
    },
  },
  figCaption: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  title: {
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

  const clickedNode = useSelector((state) => state.clickedNode);
  const loading = useSelector((state) => state.loading);

  return (
    <Fade in>
      <Box component="article" className={styles.root}>
        <Typography variant="h4" component="h1">
          {source.text}
        </Typography>
        <Box key={source.references[0]} component="figure" className="quoteBox">
          <Typography component="blockquote">"{source.explanation}"</Typography>
          <Typography
            className={styles.figCaption}
            variant="subtitle2"
            component="figcaption"
          >
            - The Buddha
            <TooltipChip sutta={source?.references[0]} />
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {source.treeTitle && (
              <Typography className={styles.title}>
                {source.treeTitle}:
              </Typography>
            )}
            <TreeView
              className={styles.treeView}
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}
            >
              <Tree data={source.children} />
            </TreeView>
            <Box className={styles.chipBox}>
              <Typography variant="body2">See:</Typography>
              {source.references.map((ref) => (
                <TooltipChip key={ref} sutta={ref} />
              ))}
            </Box>
          </Grid>
          <Hidden xsDown>
            {Boolean(clickedNode.text) && !loading && (
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
