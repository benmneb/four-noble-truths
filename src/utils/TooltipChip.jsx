import { Chip, Tooltip } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	chip: {
		marginLeft: theme.spacing(1)
	}
}));

export function TooltipChip({ handleClick, ...props }) {
	const styles = useStyles();

	return (
		<Tooltip arrow title="Read this sutta on SuttaCentral.net">
			<Chip className={styles.chip} onClick={handleClick} variant="outlined" {...props} />
		</Tooltip>
	);
}
