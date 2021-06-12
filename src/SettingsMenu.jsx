import { useContext, useState } from 'react';

import {
	Box,
	FormControl,
	IconButton,
	Select,
	Menu,
	MenuItem,
	Typography,
	Tooltip
} from '@material-ui/core';
import { SettingsRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { GlobalState } from './state/store';

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

export default function SettingsMenu() {
	const styles = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);

	const [state, dispatch] = useContext(GlobalState);

	function handleChange(event, source) {
		return dispatch({ type: `SET_${source}`, word: event.target.value });
	}

	function handleOpenMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleCloseMenu() {
		setAnchorEl(null);
	}

	return (
		<Box>
			<Tooltip title="Edit translation settings">
				<IconButton
					edge="end"
					color="inherit"
					aria-label="settings"
					aria-controls="settings-menu"
					aria-haspopup="true"
					onClick={handleOpenMenu}
				>
					<SettingsRounded />
				</IconButton>
			</Tooltip>
			<Menu
				id="settings-menu"
				variant="menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
			>
				<Box className={styles.menuItem}>
					<Box>
						<Typography component="span">
							Translate{' '}
							<Box component="span" fontStyle="italic">
								samadhi
							</Box>{' '}
							as...{' '}
						</Typography>
					</Box>
					<FormControl classes={{ root: styles.formControlRoot }}>
						<Select
							labelId="translate-samadhi-label"
							id="translate-samadhi"
							value={state.translations.samadhi}
							onChange={(event) => handleChange(event, 'SAMADHI')}
						>
							<MenuItem value={'stillness'}>stillness</MenuItem>
							<MenuItem value={'immersion'}>immersion</MenuItem>
							<MenuItem value={'concentration'}>concentration</MenuItem>
							<MenuItem value={'samadhi'}>samadhi</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box className={styles.menuItem}>
					<Box>
						<Typography component="span">
							Translate{' '}
							<Box component="span" fontStyle="italic">
								sankhara
							</Box>{' '}
							as...{' '}
						</Typography>
					</Box>
					<FormControl classes={{ root: styles.formControlRoot }}>
						<Select
							labelId="translate-sankhara-label"
							id="translate-sankhara"
							value={state.translations.sankhara}
							onChange={(event) => handleChange(event, 'SANKHARA')}
						>
							<MenuItem value={'volitional formations'}>volitional formations</MenuItem>
							<MenuItem value={'choices'}>choices</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box className={styles.menuItem}>
					<Box>
						<Typography component="span">
							Translate{' '}
							<Box component="span" fontStyle="italic">
								vedana
							</Box>{' '}
							as...{' '}
						</Typography>
					</Box>
					<FormControl classes={{ root: styles.formControlRoot }}>
						<Select
							labelId="translate-vedana-label"
							id="translate-vedana"
							value={state.translations.vedana}
							onChange={(event) => handleChange(event, 'VEDANA')}
						>
							<MenuItem value={'sensation'}>sensation</MenuItem>
							<MenuItem value={'feeling'}>feeling</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box className={styles.menuItem}>
					<Box>
						<Typography component="span">
							Translate{' '}
							<Box component="span" fontStyle="italic">
								namarupa
							</Box>{' '}
							as...{' '}
						</Typography>
					</Box>
					<FormControl classes={{ root: styles.formControlRoot }}>
						<Select
							labelId="translate-namarupa-label"
							id="translate-namarupa"
							value={state.translations.namarupa}
							onChange={(event) => handleChange(event, 'NAMARUPA')}
						>
							<MenuItem value={'mind and matter'}>mind and matter</MenuItem>
							<MenuItem value={'name and form'}>name and form</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Menu>
		</Box>
	);
}
