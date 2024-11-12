import clsx from 'clsx';

import { Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';
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
  const clickedNode = useStore((state) => state.clickedNode);

  return (
    <Paper
      variant={smUp ? 'outlined' : 'elevation'}
      elevation={0}
      className={clsx({
        [styles.displayNone]:
          hoverTruth || (!Boolean(clickedNode.text) && !clickedNode?.id),
      })}
    >
      {clickedNode?.id && <ElaborationContents />}
      {!clickedNode?.id && <ElaborationNoContents />}
    </Paper>
  );
}
