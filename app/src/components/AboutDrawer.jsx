import { Box, Button, SwipeableDrawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub } from '@material-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import { toggleAboutDrawer } from '../state';

import { Link, TooltipChip } from '../utils';

const useStyles = makeStyles({
  drawerPaper: {
    width: 290,
    maxWidth: '80vw',
  },
  figCaption: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
});

export default function AboutDrawer() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const showAboutDrawer = useSelector((state) => state.showAboutDrawer);

  return (
    <SwipeableDrawer
      classes={{ paper: styles.drawerPaper }}
      anchor="left"
      disableDiscovery
      disableSwipeToOpen
      open={showAboutDrawer}
      onClose={() => dispatch(toggleAboutDrawer())}
      onOpen={() => dispatch(toggleAboutDrawer())}
    >
      <Box component="section" margin={2}>
        <Box component="header" fontWeight="fontWeightBold">
          <Typography variant="inherit" component="h1" paragraph>
            About
          </Typography>
        </Box>
        <Typography paragraph>
          If the Four Noble Truths are what is realised by arahants...
        </Typography>
        <Box component="figure" margin={2}>
          <Typography component="blockquote">
            "Because of not truly seeing the four noble truths, we have
            transmigrated for a long time from one rebirth to the next. But now
            that these truths have been seen, the attachment to rebirth is
            eradicated. The root of suffering is cut off, now there are no more
            future lives."
          </Typography>
          <Typography
            paragraph
            variant="subtitle2"
            component="figcaption"
            className={styles.figCaption}
          >
            - The Buddha
            <TooltipChip sutta="DN 16" />
          </Typography>
        </Box>
        <Typography paragraph>
          ...then the entirity of the Buddhas teachings would stem from the Four
          Noble Truths...
        </Typography>
        <Box component="figure" margin={2}>
          <Typography component="blockquote">
            "The footprints of all creatures that walk can fit inside an
            elephant’s footprint, so an elephant’s footprint is said to be the
            biggest of them all. In the same way, all skillful qualities can be
            included in the four noble truths."
          </Typography>
          <Typography
            paragraph
            variant="subtitle2"
            component="figcaption"
            className={styles.figCaption}
          >
            - Ven. Sariputta
            <TooltipChip sutta="MN 28" />
          </Typography>
        </Box>
        <Typography paragraph>
          This site is my attempt to illustrate and organise this, while helping
          me study the suttas of the Pali Canon and practice web development.
        </Typography>
        <Box display="flex" justifyContent="space-around" marginBottom={2}>
          <Button
            href="https://github.com/benmneb/four-noble-truths"
            target="_blank"
            rel="noopener"
            startIcon={<GitHub />}
          >
            View source
          </Button>
        </Box>
        <Typography paragraph>
          <i>
            Made with metta at{' '}
            <Link
              footerLink
              href="https://bswa.org/location/bodhinyana-monastery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bodhinyana Monastery
            </Link>{' '}
            while I should have been meditating.
          </i>
        </Typography>
      </Box>
    </SwipeableDrawer>
  );
}
