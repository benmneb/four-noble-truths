import { Box, SwipeableDrawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../store';

import { TooltipChip } from '../utils';

const useStyles = makeStyles({
  drawerPaper: {
    width: 'max(30vw, 290px)',
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

  const showAboutDrawer = useStore((state) => state.showAboutDrawer);
  const toggleAboutDrawer = useStore((state) => state.toggleAboutDrawer);

  return (
    <SwipeableDrawer
      classes={{ paper: styles.drawerPaper }}
      anchor="left"
      disableDiscovery
      disableSwipeToOpen
      open={showAboutDrawer}
      onClose={toggleAboutDrawer}
      onOpen={toggleAboutDrawer}
    >
      <Box component="section" margin={1}>
        <Box component="figure" margin={2}>
          <Typography component="blockquote">
            The footprints of all creatures that walk can fit inside an
            elephant’s footprint, so an elephant’s footprint is said to be the
            biggest of them all. In the same way, all skillful qualities can be
            included in the four noble truths.
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
        <Box component="figure" margin={2}>
          <Typography component="blockquote">
            Because of not truly seeing the four noble truths, we have
            transmigrated for a long time from one rebirth to the next. But now
            that these truths have been seen, the attachment to rebirth is
            eradicated. The root of suffering is cut off, now there are no more
            future lives.
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
      </Box>
    </SwipeableDrawer>
  );
}
