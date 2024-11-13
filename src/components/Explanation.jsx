import { useEffect } from 'react';

import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useParams } from 'react-router-dom';

import * as truths from '../data';
import { useStore } from '../store';
import { findDataByText, TruthHelpers } from '../utils';
import { ExplanationContents } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: '90vw',
    maxWidth: theme.breakpoints.values.md,
    minHeight: '70vh',
    margin: theme.spacing(4, 3, 0, 3),
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
    },
  },
}));

export default function Explanation() {
  const styles = useStyles();

  const { truth, explanation } = useParams();

  const clickedTruth = useStore((state) => state.clickedTruth);
  const setClickedTruth = useStore((state) => state.setClickedTruth);
  const clickedNode = useStore((state) => state.clickedNode);
  const setClickedNode = useStore((state) => state.setClickedNode);

  useEffect(() => {
    // Set the state if there isn't any based on URL (handle page (re?)load).
    // TODO: Deprecate clickedTruth and clickedNode and make a hook to use this check everywhere
    const confirmedTruth = TruthHelpers.wordToNumber(truth);
    if (!clickedTruth && truth && confirmedTruth)
      setClickedTruth(confirmedTruth);
    const nodeData = findDataByText(truths[truth], explanation);
    if (!clickedNode.id && explanation && nodeData) setClickedNode(nodeData);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box className={styles.root}>
      <Paper className={styles.paper} variant="outlined" component="section">
        <ExplanationContents />
        {/* <Outlet /> */}
      </Paper>
    </Box>
  );
}
