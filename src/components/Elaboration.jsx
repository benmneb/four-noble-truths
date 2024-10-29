import { useEffect } from 'react';

import clsx from 'clsx';

import { Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';
import {
  ElaborationContents,
  ElaborationNoContents,
  ElaborationSkeleton,
} from './index';

import { elaborations } from '../data';

const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: 'none',
  },
}));

export default function Elaboration() {
  const styles = useStyles();

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
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    (async function () {
      try {
        const elaboration = elaborations.find(
          (el) => el.for === clickedNode.for
        );
        if (!elaboration) throw new Error('Elaboration not found');
        const data = Array.isArray(elaboration) ? elaboration : [elaboration];
        if (isMounted) {
          setClickedElaboration(data);
          setVisibleElaboration(data);
          setLoading(false);
        }
      } catch (error) {
        if (!isMounted) return;

        setClickedElaboration(null);
        setVisibleElaboration(null);
        setLoading(false);

        console.log('Error:', error.message);
      }
    })();

    return () => {
      isMounted = false;
      setClickedElaboration(null);
      setVisibleElaboration(null);
      setLoading(false);
    };
  }, [
    clickedNode,
    smUp,
    setClickedElaboration,
    setVisibleElaboration,
    setLoading,
  ]);

  return (
    <Paper
      variant={smUp ? 'outlined' : 'elevation'}
      elevation={0}
      className={clsx({
        [styles.displayNone]:
          hoverTruth || (!Boolean(clickedNode.text) && !visibleElaboration),
      })}
    >
      {loading && <ElaborationSkeleton />}
      {!loading && visibleElaboration && <ElaborationContents />}
      {!loading && !visibleElaboration && <ElaborationNoContents />}
    </Paper>
  );
}
