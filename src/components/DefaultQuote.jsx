import { Box, Fade, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { handleSuttaLinkClick } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    cursor: 'pointer',
    textAlign: 'center',
    '& figcaption:nth-child(2)': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function DefaultQuote() {
  const styles = useStyles();

  return (
    <Fade in>
      <Box className={styles.root} component="figure">
        <Tooltip arrow title="Read on SuttaCentral.net">
          <Box
            className={styles.quote}
            onClick={() => handleSuttaLinkClick('SN 56.24')}
          >
            <Typography component="blockquote">
              Whatever perfected ones, fully awakened Buddhas, truly wake up
              <br />
              — in the past, future, or present —<br />
              all of them truly wake up to the Four Noble Truths.
            </Typography>
            <Typography variant="subtitle2" component="figcaption">
              - The Buddha
            </Typography>
          </Box>
        </Tooltip>
      </Box>
    </Fade>
  );
}
