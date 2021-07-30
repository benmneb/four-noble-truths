import { useState } from 'react';

import {
  Box,
  Button,
  MenuItem,
  SwipeableDrawer,
  TextField,
  Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { toggleAddElaboration } from '../state';

import { suttas } from '../data';
import { mongo } from '../assets';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    maxWidth: '75vw',
    width: 350,
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    '& div': {
      display: 'flex',
      columnGap: theme.spacing(2),
      '& .MuiTextField-root': {
        width: '100%',
      },
      '& .MuiAutocomplete-root': {
        width: '100%',
      },
    },
  },
}));

export default function ElaborationAdd() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const showAddElaboration = useSelector((state) => state.showAddElaboration);
  const clickedNode = useSelector((state) => state.clickedNode);

  const [book, setBook] = useState('');
  const [sutta, setSutta] = useState('');
  const [quote, setQuote] = useState('');
  const [attribution, setAttribution] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit() {
    console.log({
      for: clickedNode.for,
      reference: `${book} ${sutta}`,
      text: quote,
      spokenBy: attribution,
      ...(name && { submittedBy: name }),
    });
    try {
      await mongo.add({
        for: clickedNode.for,
        reference: `${book} ${sutta}`,
        text: quote,
        spokenBy: attribution,
        ...(name && { submittedBy: name }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancel() {
    setBook('');
    setSutta('');
    setQuote('');
    setAttribution('');
    setName('');
    setEmail('');
    dispatch(toggleAddElaboration());
  }

  function toggleDrawer() {
    dispatch(toggleAddElaboration());
  }

  return (
    <SwipeableDrawer
      classes={{ paper: styles.drawerPaper }}
      anchor="right"
      disableDiscovery
      disableSwipeToOpen
      open={showAddElaboration}
      onClose={handleCancel}
      onOpen={toggleDrawer}
    >
      <Typography component="div">
        <Box margin={2} textAlign="center" fontWeight="fontWeightMedium">
          Submit sutta quote for
          <br />
          <i>{clickedNode.text}</i>
        </Box>
      </Typography>
      <Box component="form" className={styles.form}>
        <Box>
          <TextField
            select
            label="Book"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            helperText="Select the book"
            variant="outlined"
          >
            {Object.keys(suttas)
              .sort()
              .map((book) => (
                <MenuItem key={book} value={book}>
                  {book}
                </MenuItem>
              ))}
          </TextField>
          <Autocomplete
            openOnFocus
            options={book && Object.values(suttas[book])}
            disabled={!book}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Sutta"
                variant="outlined"
                helperText="Select the sutta"
              />
            )}
          />
          {/* <TextField
            select
            label="Sutta"
            value={sutta}
            onChange={(e) => setSutta(e.target.value)}
            helperText="Select the sutta"
            variant="outlined"
            disabled={!book}
          >
            {book ? (
              Object.values(
                suttas[book].map((each) => (
                  <MenuItem key={each} value={each}>
                    {each}
                  </MenuItem>
                ))
              )
            ) : (
              <MenuItem></MenuItem>
            )}
          </TextField> */}
        </Box>
        <TextField
          label="Quote"
          variant="outlined"
          multiline
          rows={4}
          helperText="Paste the sutta quote here"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <TextField
          label="Attribution"
          variant="outlined"
          helperText="Who is being quoted?"
          value={attribution}
          onChange={(e) => setAttribution(e.target.value)}
        />
        <TextField
          label="Your name (optional)"
          variant="outlined"
          helperText="Your name is publically displayed"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Your email"
          variant="outlined"
          helperText="Your email is for verification purposes only. It's not publically displayed or stored in any way"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </Box>
    </SwipeableDrawer>
  );
}
