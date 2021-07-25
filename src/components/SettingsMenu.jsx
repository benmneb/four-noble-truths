import { useState } from 'react';

import { Box, IconButton, Menu, Tooltip, Typography } from '@material-ui/core';
import { SettingsRounded } from '@material-ui/icons';

import { SettingsMenuItem } from './index';
import { useGlobalState } from '../state/';

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [state, dispatch] = useGlobalState();

  function handleChangeTranslation(word, source) {
    return dispatch({ type: `SET_${source}`, word });
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
          paliWord="samādhi"
          englishOptions={['stillness', 'immersion', 'concentration']}
          value={state.translations.samadhi}
          handleChange={(e) =>
            handleChangeTranslation(e.target.value, 'SAMADHI')
          }
        />
        <SettingsMenuItem
          paliWord="sankhāra"
          englishOptions={['volitional formations', 'choices']}
          value={state.translations.sankhara}
          handleChange={(e) =>
            handleChangeTranslation(e.target.value, 'SANKHARA')
          }
        />
        <SettingsMenuItem
          paliWord="vedanā"
          englishOptions={['sensation', 'feeling']}
          value={state.translations.vedana}
          handleChange={(e) =>
            handleChangeTranslation(e.target.value, 'VEDANA')
          }
        />
        <SettingsMenuItem
          paliWord="nāmarūpa"
          englishOptions={['mind and matter', 'name and form']}
          value={state.translations.namarupa}
          handleChange={(e) =>
            handleChangeTranslation(e.target.value, 'NAMARUPA')
          }
        />
        <SettingsMenuItem
          paliWord="jhāna"
          englishOptions={['jhāna', 'absorption']}
          value={state.translations.jhana}
          handleChange={(e) => handleChangeTranslation(e.target.value, 'JHANA')}
        />
      </Menu>
    </Box>
  );
}
