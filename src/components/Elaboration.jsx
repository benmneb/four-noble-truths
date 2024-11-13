import clsx from 'clsx';

import { Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';
import { useParamsData } from '../utils';
import { ElaborationContents, ElaborationNoContents } from './index';

const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: 'none',
  },
}));

export default function Elaboration() {
  const styles = useStyles();

  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const hoverTruth = useStore((state) => state.hoverTruth);
  const { node } = useParamsData();

  return (
    <Paper
      variant={smUp ? 'outlined' : 'elevation'}
      elevation={0}
      className={clsx({
        [styles.displayNone]: hoverTruth || (!!node.text && !node?.id),
      })}
    >
      {node?.id && <ElaborationContents />}
      {!node?.id && <ElaborationNoContents />}
    </Paper>
  );
}
