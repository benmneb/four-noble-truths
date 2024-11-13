import { Chip } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';
import { handleSuttaLinkClick } from './index';

const useStyles = makeStyles((theme) => ({
  chip: {
    padding: theme.spacing(2, 0),
    margin: theme.spacing(1, 0, 0, 1),
  },
}));

export function TooltipChip({ sutta }) {
  const styles = useStyles();

  const themeType = useStore((state) => state.themeType);

  return (
    // <Tooltip arrow title="Read on SuttaCentral.net">
    <Chip
      className={styles.chip}
      variant={themeType === 'dark' ? 'outlined' : 'default'}
      label={sutta}
      onClick={() => handleSuttaLinkClick(sutta)}
    />
    // </Tooltip>
  );
}
