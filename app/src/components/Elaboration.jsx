import { useEffect } from 'react';

import clsx from 'clsx';

import { Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';

import {
  ElaborationContents,
  ElaborationNoContents,
  ElaborationSkeleton,
} from './index';
import {
  setClickedElaboration,
  setLoading,
  setVisibleElaboration,
} from '../state';
import { mongo, axios } from '../assets';

const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: 'none',
  },
}));

export default function Elaboration() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const visibleElaboration = useSelector((state) => state.visibleElaboration);
  const hoverTruth = useSelector((state) => state.hoverTruth);
  const clickedNode = useSelector((state) => state.clickedNode);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let isMounted = true;
    dispatch(setLoading(true));

    (async function () {
      try {
        const response = await mongo.get(clickedNode.for, source.token);
        const data = await response.data;
        if (isMounted) {
          dispatch(setClickedElaboration(data));
          dispatch(setVisibleElaboration(data));
          dispatch(setLoading(false));
        }
      } catch (error) {
        if (!isMounted) return;

        dispatch(setClickedElaboration(null));
        dispatch(setVisibleElaboration(null));
        dispatch(setLoading(false));

        if (axios.isCancel(error)) {
          console.log('Axios was cancelled:', error.message);
        } else {
          console.log('Error:', error.message);
        }
      }
    })();

    return () => {
      isMounted = false;
      source.cancel('Axios source.cancelled');
      dispatch(setClickedElaboration(null));
      dispatch(setVisibleElaboration(null));
      dispatch(setLoading(false));
    };
  }, [clickedNode, dispatch, smUp]);

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
