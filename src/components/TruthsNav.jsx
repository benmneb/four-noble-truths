import clsx from 'clsx';

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { setClickedTruth, setHoverTruth } from '../state';

import { TruthPaper } from './index';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper,
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  bottomNav: {
    boxShadow:
      '0px -2px 4px -1px rgba(0,0,0,0.2),0px -4px 5px 0px rgba(0,0,0,0.14),0px -1px 10px 0px rgba(0,0,0,0.12)',
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
    transition: `color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
  },
  selectedText: {
    color: theme.palette.type === 'dark' && theme.palette.primary.main,
  },
  selectedNumber: {
    color: theme.palette.type === 'light' && theme.palette.primary.light,
  },
}));

function BottomNavLabel({ label, number }) {
  const styles = useStyles();

  const clickedTruth = useSelector((state) => state.clickedTruth);

  return (
    <Box component="span" className={styles.paper}>
      <Box className={styles.numberBox}>
        <Box
          component="span"
          className={clsx(styles.number, {
            [styles.selectedNumber]: clickedTruth === number,
          })}
        >
          {number}
        </Box>
      </Box>
      <Box
        component="span"
        className={clsx(styles.text, {
          [styles.selectedText]: clickedTruth === number,
        })}
      >
        {label}
      </Box>
    </Box>
  );
}

export default function TruthsNav() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const hoverTruth = useSelector((state) => state.hoverTruth);
  const clickedTruth = useSelector((state) => state.clickedTruth);

  function handleMobileNavChange(number) {
    if (hoverTruth !== 0) {
      dispatch(setHoverTruth(0));
    }

    if (number !== clickedTruth) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      dispatch(setClickedTruth(number));
    } else {
      dispatch(setClickedTruth(0));
    }
  }

  return (
    <Box className={styles.root} component="nav">
      <Hidden smUp>
        <BottomNavigation
          className={styles.bottomNav}
          value={clickedTruth}
          onChange={(event, value) => handleMobileNavChange(value)}
          showLabels
        >
          <BottomNavigationAction
            classes={{ selected: styles.selectedBottomNav }}
            label={<BottomNavLabel label="Suffering" number={1} />}
            value={1}
          />
          <BottomNavigationAction
            classes={{ selected: styles.selectedBottomNav }}
            label={<BottomNavLabel label="Origin" number={2} />}
            value={2}
          />
          <BottomNavigationAction
            classes={{ selected: styles.selectedBottomNav }}
            label={<BottomNavLabel label="Cessation" number={3} />}
            value={3}
          />
          <BottomNavigationAction
            classes={{ selected: styles.selectedBottomNav }}
            label={<BottomNavLabel label="Path" number={4} />}
            value={4}
          />
        </BottomNavigation>
      </Hidden>
      <Hidden xsDown>
        <TruthPaper label="Suffering" number={1} />
        <TruthPaper label="The Origin of Suffering" number={2} />
        <TruthPaper label="The Cessation of Suffering" number={3} />
        <TruthPaper
          label="The Path Leading to the Cessation of Suffering"
          number={4}
        />
      </Hidden>
    </Box>
  );
}
