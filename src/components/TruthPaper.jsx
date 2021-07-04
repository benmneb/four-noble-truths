import { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../state';

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
	numberBox: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	number: {
		fontSize: '8rem',
		color: theme.palette.background.default,
		fontWeight: theme.typography.fontWeightBold,
		lineHeight: 1,
		zIndex: 100,
		webkitTouchCallout: 'none',
		webkitUserSelect: 'none',
		khtmlUserSelect: 'none',
		mozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	text: {
		margin: theme.spacing(0.5),
		zIndex: 101,
		transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`
	},
	selectedTruth: {
		color: theme.palette.primary.main
	}
}));

export default function TruthPaper({ number, label }) {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();
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
			<Box className={styles.numberBox}>
				<Typography className={styles.number}>{number}</Typography>
			</Box>
			<Typography
				className={clsx(
					styles.text,
					state.clickedTruth === number && styles.selectedTruth
				)}
			>
				{label}
			</Typography>
		</Paper>
	);
}

TruthPaper.propTypes = {
	label: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired
};