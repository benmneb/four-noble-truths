import clsx from 'clsx';

import { Paper, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useParamsData } from '../utils';
import { ElaborationContents, ElaborationNoContents } from './index';

const useStyles = makeStyles((theme) => ({
  displayNone: {
    display: 'none',
  },
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}));

export default function Elaboration() {
  const styles = useStyles();

  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const { node } = useParamsData();

  return (
    <Paper
      variant={smUp ? 'outlined' : 'elevation'}
      elevation={0}
      className={clsx({
        [styles.root]: true,
        [styles.displayNone]: !!node?.text && !node?.id,
      })}
    >
      {node?.id && <ElaborationContents />}
      {!node?.elaborations?.length && <ElaborationNoContents />}
    </Paper>
  );
}
