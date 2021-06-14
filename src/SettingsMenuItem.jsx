import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { Box, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	menuItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		margin: theme.spacing(1),
		width: 366
	},
	formControlRoot: {
		width: '48%'
	}
}));

const SettingsMenuItem = forwardRef((props, ref) => {
	const { paliWord, value, handleChange, englishOptions } = props;

	const styles = useStyles();

	return (
		<Box ref={ref} className={styles.menuItem}>
			<Box>
				<Typography component="span">
					Translate{' '}
					<Box component="span" fontWeight="fontWeightBold">
						{paliWord}
					</Box>{' '}
					as...{' '}
				</Typography>
			</Box>
			<FormControl classes={{ root: styles.formControlRoot }}>
				<Select
					labelId={`translate-${paliWord}-label`}
					id={`translate-${paliWord}`}
					value={value}
					onChange={handleChange}
				>
					{englishOptions.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
});

SettingsMenuItem.propTypes = {
	paliWord: PropTypes.string.isRequired,
	englishOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default SettingsMenuItem;
