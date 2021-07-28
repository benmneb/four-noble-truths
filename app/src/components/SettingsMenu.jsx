import { useState } from 'react';

import { Box, IconButton, Menu, Tooltip, Typography } from '@material-ui/core';
import { SettingsRounded } from '@material-ui/icons';

import { useSelector, useDispatch } from 'react-redux';

import { SettingsMenuItem } from './index';
import { setTranslation } from '../state';

export default function SettingsMenu() {
  const dispatch = useDispatch();

  const translations = useSelector((state) => state.translations);

  const [anchorEl, setAnchorEl] = useState(null);

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
          value={translations.samadhi}
          handleChange={(e) =>
            dispatch(setTranslation('samadhi', e.target.value))
          }
        />
        <SettingsMenuItem
          paliWord="sankhāra"
          englishOptions={['volitional formations', 'choices']}
          value={translations.sankhara}
          handleChange={(e) =>
            dispatch(setTranslation('sankhara', e.target.value))
          }
        />
        <SettingsMenuItem
          paliWord="vedanā"
          englishOptions={['sensation', 'feeling']}
          value={translations.vedana}
          handleChange={(e) =>
            dispatch(setTranslation('vedana', e.target.value))
          }
        />
        <SettingsMenuItem
          paliWord="nāmarūpa"
          englishOptions={['mind and matter', 'name and form']}
          value={translations.namarupa}
          handleChange={(e) =>
            dispatch(setTranslation('namarupa', e.target.value))
          }
        />
        <SettingsMenuItem
          paliWord="jhāna"
          englishOptions={['jhāna', 'absorption']}
          value={translations.jhana}
          handleChange={(e) =>
            dispatch(setTranslation('jhana', e.target.value))
          }
        />
      </Menu>
    </Box>
  );
}
