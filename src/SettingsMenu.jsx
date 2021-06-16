import { useState } from 'react';

import { Box, IconButton, Menu, Tooltip, Typography } from '@material-ui/core';
import { SettingsRounded } from '@material-ui/icons';

import SettingsMenuItem from './SettingsMenuItem';
import { useGlobalState } from './state/store';

export default function SettingsMenu() {
	const [anchorEl, setAnchorEl] = useState(null);

	const [state, dispatch] = useGlobalState();

	function handleChangeTranslation(event, source) {
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
				<Box margin={1} marginBottom={2} textAlign="center">
					<Typography>Pali/English Translation Settings</Typography>
				</Box>
				<SettingsMenuItem
					paliWord="samadhi"
					englishOptions={['stillness', 'immersion', 'concentration']}
					value={state.translations.samadhi}
					handleChange={(event) => handleChangeTranslation(event, 'SAMADHI')}
				/>
				<SettingsMenuItem
					paliWord="sankhara"
					englishOptions={['volitional formations', 'choices']}
					value={state.translations.sankhara}
					handleChange={(event) => handleChangeTranslation(event, 'SANKHARA')}
				/>
				<SettingsMenuItem
					paliWord="vedana"
					englishOptions={['sensation', 'feeling']}
					value={state.translations.vedana}
					handleChange={(event) => handleChangeTranslation(event, 'VEDANA')}
				/>
				<SettingsMenuItem
					paliWord="namarupa"
					englishOptions={['mind and matter', 'name and form']}
					value={state.translations.namarupa}
					handleChange={(event) => handleChangeTranslation(event, 'NAMARUPA')}
				/>
			</Menu>
		</Box>
	);
}
