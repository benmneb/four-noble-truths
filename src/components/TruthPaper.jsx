import { useState } from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useNavigate } from 'react-router-dom';

import { useStore } from '../store';
import { TruthHelpers, useParamsData } from '../utils';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: theme.spacing(18),
    height: theme.spacing(16),
    margin: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  numberBox: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: '8rem',
    color:
      theme.palette.type === 'dark'
        ? theme.palette.background.default
        : theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    zIndex: 100,
    transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  text: {
    margin: theme.spacing(0.5),
    zIndex: 101,
    transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  },
  selectedText: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.primary.main
        : theme.palette.text.primary,
  },
  selectedNumber: {
    color: theme.palette.type === 'light' && theme.palette.primary.light,
  },
}));

export default function TruthPaper(props) {
  const { id, label } = props;

  const styles = useStyles();
  const navigate = useNavigate();

  const setHoverTruth = useStore((state) => state.setHoverTruth);
  const { truth } = useParamsData();
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    if (id !== truth) {
      setHoverTruth(id);
      setIsHovering(true);
    }
  }

  function handleMouseLeave() {
    if (id !== truth) {
      setHoverTruth(0);
      setIsHovering(false);
    }
  }

  function handleClick() {
    if (id !== truth) {
      setHoverTruth(0);
      navigate(`/${id}`);
    } else {
      navigate('/');
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
        <Typography
          className={clsx(styles.number, {
            [styles.selectedNumber]: truth === id,
          })}
        >
          {TruthHelpers.wordToNumber(id)}
        </Typography>
      </Box>
      <Typography
        className={clsx(styles.text, {
          [styles.selectedText]: truth === id,
        })}
      >
        {label}
      </Typography>
    </Paper>
  );
}

TruthPaper.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
