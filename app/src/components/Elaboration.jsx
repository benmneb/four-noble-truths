import { Paper, useMediaQuery } from '@material-ui/core';

import { useSelector } from 'react-redux';

import { ElaborationContents } from './index';

export default function Elaboration() {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const elaboration = useSelector(
    (state) => state.visibleElaboration?.elaboration
  );

  return (
    <Paper variant={smUp ? 'outlined' : 'elevation'} elevation={0}>
      <ElaborationContents hasContents={Boolean(elaboration)} />
    </Paper>
  );
}
