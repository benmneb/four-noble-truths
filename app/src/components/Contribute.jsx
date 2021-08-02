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

import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import {
  getElaborations,
  toggleAddElaboration,
  setSnackPack,
  setLoading,
} from '../state';

import { LoadingButton } from '../utils';
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
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment':
        {
          columnGap: 0,
        },
    },
  },
}));

export default function ElaborationAdd() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const showAddElaboration = useSelector((state) => state.showAddElaboration);
  const clickedNode = useSelector((state) => state.clickedNode);

  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const book = watch('book', '');
  const sutta = watch('sutta', '');

  async function submitForm(data) {
    setPending(true);
    try {
      const response = await mongo.post(null, {
        for: clickedNode.for,
        reference: `${data.book} ${data.sutta}`,
        text: data.quote,
        spokenBy: data.attribution,
        ...(data.name && { submittedBy: data.name }),
        email: data.email,
      });
      const addedId = await response.data.id;
      dispatch(
        setSnackPack('Contribution received', {
          severity: 'success',
          newContributionId: addedId,
        })
      );
      dispatch(getElaborations(clickedNode.for));
      dispatch(setLoading(true));
      handleClose();
    } catch (error) {
      console.error(error.message);
      setPending(false);
      dispatch(
        setSnackPack("Something wen't wrong, please try again", {
          severity: 'error',
        })
      );
    }
  }

  function handleClose() {
    reset();
    dispatch(toggleAddElaboration());
    setTimeout(() => {
      setPending(false);
    }, 300);
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
      onClose={handleClose}
      onOpen={toggleDrawer}
    >
      <Typography component="div">
        <Box margin={2} textAlign="center" fontWeight="fontWeightMedium">
          Submit sutta quote for
          <br />
          <i>{clickedNode.text}</i>
        </Box>
      </Typography>
      <Box
        component="form"
        className={styles.form}
        onSubmit={handleSubmit(submitForm)}
      >
        <Box>
          <TextField
            select
            label="Book"
            value={book ? book : ''}
            helperText="Select the book"
            variant="outlined"
            {...register('book', { required: true })}
            error={Boolean(errors.book)}
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
            options={Boolean(book) ? Object.values(suttas[book]) : []}
            disabled={!Boolean(book)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Sutta"
                variant="outlined"
                helperText="Select the sutta"
                value={sutta ? sutta : []}
                {...register('sutta', { required: true })}
                error={Boolean(errors.sutta)}
              />
            )}
          />
        </Box>
        <TextField
          label="Quote"
          variant="outlined"
          multiline
          rows={4}
          helperText={
            errors.quote ? errors.quote.message : 'Paste the sutta quote here'
          }
          {...register('quote', {
            required: 'Please enter a quote',
            minLength: { value: 25, message: 'Minimum 25 characters' },
          })}
          error={Boolean(errors.quote)}
        />
        <TextField
          label="Attribution"
          variant="outlined"
          helperText={
            Boolean(errors.attribution)
              ? errors.attribution.message
              : 'Who is being quoted?'
          }
          {...register('attribution', {
            required: 'Please enter the person who is being quoted',
            minLength: { value: 3, message: 'Please enter a longer name' },
            maxLength: { value: 25, message: 'Please enter a shorter name' },
          })}
          error={Boolean(errors.attribution)}
        />
        <TextField
          label="Your name (optional)"
          variant="outlined"
          helperText={
            Boolean(errors.name)
              ? errors.name.message
              : 'Your name is publically displayed'
          }
          {...register('name', {
            minLength: { value: 3, message: 'Please enter a longer name' },
            maxLength: { value: 25, message: 'Please enter a shorter name' },
            pattern: {
              value: /^((?!benmneb).)*$/gi,
              message: 'Please enter your own name',
            },
          })}
          error={Boolean(errors.name)}
        />
        <TextField
          label="Your email"
          variant="outlined"
          helperText={
            Boolean(errors.email)
              ? errors.email.message
              : "Your email is for verification purposes only. It's not publically displayed"
          }
          {...register('email', {
            required:
              "Please enter your email for verification purposes. It won't be publically displayed",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email',
            },
          })}
          error={Boolean(errors.email)}
        />
        <LoadingButton
          size="large"
          color="primary"
          variant="contained"
          type="submit"
          pending={pending}
        >
          Submit
        </LoadingButton>
        <Button onClick={handleClose}>Cancel</Button>
      </Box>
    </SwipeableDrawer>
  );
}
