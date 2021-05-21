import { useContext, useState } from 'react';

import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Context } from './state/store';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: theme.spacing(18),
		height: theme.spacing(16),
		margin: theme.spacing(1),
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer'
	},
	number: {
		fontSize: '8rem',
		color: theme.palette.background.default,
		zIndex: 100,
		position: 'absolute',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: theme.typography.fontWeightBold,
		lineHeight: 1,
		webkitTouchCallout: 'none',
		webkitUserSelect: 'none',
		khtmlUserSelect: 'none',
		mozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	text: {
		margin: theme.spacing(0.5),
		zIndex: 101
	}
}));

export default function TruthPaper({ number, children }) {
	const styles = useStyles();
	const [state, dispatch] = useContext(Context);
	const [isHovering, setIsHovering] = useState(false);

	function handleMouseEnter() {
		if (number !== state.clickedTruth) {
			dispatch({ type: 'HOVER_TRUTH', number });
			dispatch({ type: 'VISIBLE_ELABORATION', visibleElaboration: null });
			setIsHovering(true);
		}
	}

	function handleMouseLeave() {
		if (number !== state.clickedTruth) {
			dispatch({ type: 'HOVER_TRUTH', number: 0 });
			dispatch({
				type: 'VISIBLE_ELABORATION',
				visibleElaboration: state.clickedElaboration
			});
			setIsHovering(false);
		}
	}

	function handleClick() {
		if (number !== state.clickedTruth) {
			dispatch({ type: 'CLICKED_TRUTH', number });
			dispatch({ type: 'VISIBLE_ELABORATION', visibleElaboration: null });
			dispatch({ type: 'CLICKED_ELABORATION', clickedElaboration: null });
		} else {
			dispatch({ type: 'CLICKED_TRUTH', number: 0 });
		}
	}

	return (
		<Paper
			elevation={isHovering ? 6 : 3}
			className={styles.paper}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			<Typography className={styles.number}>{number}</Typography>
			<Typography className={styles.text}>{children}</Typography>
		</Paper>
	);
}
