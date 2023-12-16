import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useAuth } from '../../context/auth';
import Validate from '../../utils/form-validator';
import invitePeople from '../../services/invite-people-service';
import EventEmitterService from '../../services/event-emitter-service';

import 'react-toastify/dist/ReactToastify.css';

export default function AddGuestForm({
  id,
}: PropsWithChildren<{ id: string }>) {
  const [disabled, setDisabled] = React.useState(false);
  const [fired, setFired] = React.useState(false);
  const [email, setEmail] = React.useState<string>('');
  const [invalid, setInvalid] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const { token } = useAuth();

  const changeEmailHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setEmail(e.target.value);
    if (!fired) setFired(true);
  };

  const addGuestHandler: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const res = await invitePeople(id, email, token!);
    setEmail('');
    EventEmitterService('invitation_added', {
      id: res.data.id,
      status: res.data.status,
      name: res.data.name,
      email: res.data.email,
    });
  };

  React.useEffect(() => {
    setInvalid(false);
    setMessage('');

    if (!email && fired) {
      setInvalid(true);
      setMessage('Email is a required field');
    } else if (!Validate.validateEmail(email)[0] && fired) {
      setInvalid(true);
      setMessage('Please provide a valid email address');
    }
    setDisabled(!email || !Validate.validateEmail(email)[0]);
  }, [email]);

  return (
    <Container component="div" maxWidth="sm">
      <Box component="form" onSubmit={addGuestHandler} sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              fullWidth
              id="email"
              label="Email"
              value={email}
              onChange={changeEmailHandler}
              error={invalid}
              helperText={message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={disabled}
              type="submit"
              fullWidth
              variant="contained"
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
