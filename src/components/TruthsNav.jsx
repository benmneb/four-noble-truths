import clsx from 'clsx';

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';

import { useNavigate } from 'react-router-dom';
import { TruthHelpers, useParamsData } from '../utils';
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
  const hoverTruth = useStore((state) => state.hoverTruth);
  const setHoverTruth = useStore((state) => state.setHoverTruth);

  function handleMobileNavChange(value) {
    if (hoverTruth !== 0) setHoverTruth(0);

    if (value !== truth) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      navigate(`/${value}`);
    } else {
      navigate('/');
    }
  }

  return (
    <Box className={styles.root} component="nav">
      <Hidden smUp>
        <BottomNavigation
          className={styles.bottomNav}
          value={truth}
          onChange={(event, value) => handleMobileNavChange(value)}
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
      </Hidden>
      <Hidden xsDown>
        <TruthPaper label="Suffering" id="suffering" />
        <TruthPaper label="The Origin of Suffering" id="origin" />
        <TruthPaper label="The Cessation of Suffering" id="cessation" />
        <TruthPaper
          label="The Path Leading to the Cessation of Suffering"
          id="path"
        />
      </Hidden>
    </Box>
  );
}
