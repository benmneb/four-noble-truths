import { Chip, Tooltip } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { handleSuttaLinkClick } from './index';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1, 0, 0, 1),
  },
}));

export function TooltipChip({ sutta }) {
  const styles = useStyles();

  return (
    <Tooltip arrow title="Read this sutta on SuttaCentral.net">
      <Chip
        className={styles.chip}
        variant="outlined"
        label={sutta}
        onClick={() => handleSuttaLinkClick(sutta)}
      />
    </Tooltip>
  );
}
