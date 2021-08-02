import { useState } from 'react';

import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { SendRounded } from '@material-ui/icons/';

import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';

import { setSnackPack, toggleContact } from '../state';
import { mongo } from '../assets';
import { LoadingButton } from '../utils';

export default function FormDialog() {
  const dispatch = useDispatch();

  const showContact = useSelector((state) => state.showContact);

  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitForm(data) {
    const { message, email } = data;
    setPending(true);

    try {
      const response = await mongo.post('/contact', {
        message,
        email,
      });

      if (response.data.success) {
        dispatch(
          setSnackPack('Message sent successfully', { severity: 'success' })
        );
        handleClose();
      } else {
        setPending(false);
        dispatch(
          setSnackPack('Could not send, please try again soon', {
            severity: 'error',
          })
        );
      }
    } catch (error) {
      console.error(error.message);
      setPending(false);
      dispatch(
        setSnackPack('Could not send, please try again soon', {
          severity: 'error',
        })
      );
    }
  }

  function handleClose() {
    dispatch(toggleContact());
  }

  function handleExited() {
    reset();
    setPending(false);
  }

  return (
    <Dialog
      open={showContact}
      onClose={handleClose}
      onExited={handleExited}
      aria-labelledby="contact-dialog-title"
    >
      <DialogTitle id="contact-dialog-title">Contact</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(submitForm)}>
        <DialogContent>
          <DialogContentText>
            For questions, comments, concerns, criticisms and outrageous
            compliments.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            multiline
            rowsMax={5}
            fullWidth
            {...register('message', {
              required: 'Please enter a message',
              minLength: {
                value: 10,
                message: 'Please enter a longer message',
              },
            })}
            error={Boolean(errors.message)}
            helperText={Boolean(errors.message) && errors.message.message}
          />
          <TextField
            margin="dense"
            id="email"
            label="Return address (optional)"
            type="email"
            fullWidth
            {...register('email', {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email',
              },
            })}
            error={Boolean(errors.email)}
            helperText={Boolean(errors.email) && errors.email.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<SendRounded />}
            pending={pending}
          >
            Send
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
