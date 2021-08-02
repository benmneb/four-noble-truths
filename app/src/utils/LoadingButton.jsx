import clsx from 'clsx';

import PropTypes from 'prop-types';

import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pendingSpinner: {
    position: 'absolute',
    visibility: 'visible',
    display: 'flex',
    left: '50%',
    transform: 'translate(-50%)',
  },
  hideLabel: {
    visibility: 'hidden',
  },
});

LoadingButton.propTypes = {
  pending: PropTypes.bool.isRequired,
  pendingText: PropTypes.string,
};

export default function LoadingButton(props) {
  const { pending, children, disabled, ...other } = props;

  const styles = useStyles();

  return (
    <Button
      disabled={disabled || pending}
      classes={{ label: clsx({ [styles.hideLabel]: pending }) }}
      {...other}
    >
      {pending && (
        <div className={styles.pendingSpinner}>
          <CircularProgress color="inherit" size={16} />
        </div>
      )}
      {children}
    </Button>
  );
}
