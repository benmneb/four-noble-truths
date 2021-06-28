import { Paper, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import ElaborationContents from './ElaborationContents';
import { useGlobalState } from './state/store';

export default function Elaboration() {
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up('sm'));

	const state = useGlobalState()[0];

	return (
		<Paper variant={smUp ? 'outlined' : 'elevation'} elevation={0}>
			<ElaborationContents hasContents={Boolean(state.visibleElaboration.elaboration)} />
		</Paper>
	);
}
