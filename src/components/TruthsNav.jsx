import clsx from 'clsx';

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useNavigate } from 'react-router-dom';
import { TruthHelpers, useParamsData } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.mobileStepper,
  },
  bottomNav: {
    backdropFilter: 'blur(3000rem) saturate(130%)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderTop:
      theme.palette.type === 'light' && `1px solid ${theme.palette.divider}`,
    ...theme.mixins.toolbar,
  },
  selectedBottomNav: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  // below is for BottomNavLabel()
  paper: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberBox: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: '3rem',
    color:
      theme.palette.type === 'dark'
        ? theme.palette.background.default
        : theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  text: {
    zIndex: theme.zIndex.mobileStepper,
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    fontSize: '1.2rem',
  },
  selectedText: {
    color: theme.palette.type === 'dark' && theme.palette.primary.main,
    fontSize: '1.3rem',
  },
  selectedNumber: {
    color: theme.palette.type === 'light' && theme.palette.primary.light,
  },
}));

function BottomNavLabel({ label, number }) {
  const styles = useStyles();
  const { truth } = useParamsData();

  return (
    <Box component="span" className={styles.paper}>
      <Box className={styles.numberBox}>
        <Box
          component="span"
          className={clsx(styles.number, {
            [styles.selectedNumber]:
              truth === TruthHelpers.numberToWord(number),
          })}
        >
          {number}
        </Box>
      </Box>
      <Box
        component="span"
        className={clsx(styles.text, {
          [styles.selectedText]: truth === TruthHelpers.numberToWord(number),
        })}
      >
        {label}
      </Box>
    </Box>
  );
}

export default function TruthsNav() {
  const styles = useStyles();
  const navigate = useNavigate();

  const { truth } = useParamsData();

  function handleChange(value) {
    if (value !== truth) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      navigate(`/${value}`);
    } else {
      navigate('/');
    }
  }

  return (
    <Box className={styles.root} component="nav">
      <BottomNavigation
        className={styles.bottomNav}
        value={truth}
        onChange={(event, value) => handleChange(value)}
        showLabels
      >
        <BottomNavigationAction
          classes={{ selected: styles.selectedBottomNav }}
          label={<BottomNavLabel label="Suffering" number={1} />}
          value="suffering"
        />
        <BottomNavigationAction
          classes={{ selected: styles.selectedBottomNav }}
          label={<BottomNavLabel label="Origin" number={2} />}
          value="origin"
        />
        <BottomNavigationAction
          classes={{ selected: styles.selectedBottomNav }}
          label={<BottomNavLabel label="Cessation" number={3} />}
          value="cessation"
        />
        <BottomNavigationAction
          classes={{ selected: styles.selectedBottomNav }}
          label={<BottomNavLabel label="Path" number={4} />}
          value="path"
        />
      </BottomNavigation>
    </Box>
  );
}
