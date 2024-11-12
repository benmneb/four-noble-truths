import { useEffect } from 'react';

import clsx from 'clsx';

import { Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useParams } from 'react-router-dom';

import { cessation, elaborations, origin, path, suffering } from '../data';
import { useStore } from '../store';
import { findDataByText } from '../utils/findObjectByValue';
import { ElaborationContents, ElaborationNoContents } from './index';

const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: 'none',
  },
}));

const truthsData = { suffering, origin, cessation, path };

export default function Elaboration() {
  const styles = useStyles();
  const params = useParams();

  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const visibleElaboration = useStore((state) => state.visibleElaboration);
  const setClickedElaboration = useStore(
    (state) => state.setClickedElaboration
  );
  const setVisibleElaboration = useStore(
    (state) => state.setVisibleElaboration
  );
  const hoverTruth = useStore((state) => state.hoverTruth);
  const clickedNode = useStore((state) => state.clickedNode);

  useEffect(() => {
    let isMounted = true;

    try {
      const { id } = findDataByText(
        truthsData[params.truth],
        params.explanation
      );
      const elaboration = elaborations.find((el) => el.for === id);
      if (!elaboration) throw new Error('Elaboration not found');
      const data = Array.isArray(elaboration) ? elaboration : [elaboration];
      if (!isMounted) return;
      setClickedElaboration(data);
      setVisibleElaboration(data);
    } catch (error) {
      if (!isMounted) return;
      setClickedElaboration(null);
      setVisibleElaboration(null);
      console.error(error);
    }

    return () => {
      isMounted = false;
      setClickedElaboration(null);
      setVisibleElaboration(null);
    };
  }, [clickedNode, smUp, params, setClickedElaboration, setVisibleElaboration]);

  return (
    <Paper
      variant={smUp ? 'outlined' : 'elevation'}
      elevation={0}
      className={clsx({
        [styles.displayNone]:
          hoverTruth || (!Boolean(clickedNode.text) && !visibleElaboration),
      })}
    >
      {visibleElaboration && <ElaborationContents />}
      {!visibleElaboration && <ElaborationNoContents />}
    </Paper>
  );
}
