import { Chip, Tooltip } from '@material-ui/core';

export default function TooltipChip({ handleClick, ...props }) {
	return (
		<Tooltip arrow title="Read this sutta on SuttaCentral.net">
			<Chip onClick={handleClick} {...props} />
		</Tooltip>
	);
}
