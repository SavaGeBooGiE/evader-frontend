import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import loadable from '@loadable/component';

import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';

import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { EventType } from '../../types/types';
import { useAuth } from '../../context/auth';
import SaveEventSettingsService from '../../services/save-event-settings-service';

import 'react-toastify/dist/ReactToastify.css';

const NameField = loadable(() => import('./name'));
const DescriptionField = loadable(() => import('./description'));
const VenueField = loadable(() => import('./venue'));
const DateField = loadable(() => import('./date'));
const TimeField = loadable(() => import('./time'));

export default function EventSettings({
  id,
  fetchedEvent,
}: PropsWithChildren<{ id: string; fetchedEvent: EventType }>) {
  const [disabled, setDisabled] = React.useState(true);
  const [name, setName] = React.useState(fetchedEvent.name);
  const [description, setDescription] = React.useState(
    fetchedEvent.description
  );
  const [venue, setVenue] = React.useState(fetchedEvent.venue);
  const [dateTime, setDateTime] = React.useState(moment(fetchedEvent.time));

  const { token } = useAuth();
  const router = useRouter();

  const cancelEditHandler = () => {
    setName(fetchedEvent.name);
    setDescription(fetchedEvent.description);
    setDateTime(moment(fetchedEvent.time));
  };

  const sumbitSettingsHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();

    const modifiedData = {
      name,
      description,
      venue,
      time: dateTime.toDate(),
    };

    try {
      await SaveEventSettingsService(id, token!, modifiedData);
      router.replace(`/events`);
    } catch (err: any) {
      toast.error('Something went wrong!');
    }
  };

  React.useEffect(() => {
    setDisabled(!name || dateTime <= moment());
  }, [name, dateTime]);

  return (
    <>
      <Container component="div" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Event Settings
          </Typography>
          <Box component="form" onSubmit={sumbitSettingsHandler} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <NameField name={name} setName={setName} />
              </Grid>
              <Grid item xs={12}>
                <DescriptionField desc={description} setDesc={setDescription} />
              </Grid>
              <Grid item xs={12}>
                <VenueField venue={venue} setVenue={setVenue} />
              </Grid>
              <Grid item xs={12}>
                <DateField date={dateTime} setDate={setDateTime} />
              </Grid>
              <Grid item xs={12}>
                <TimeField time={dateTime} setTime={setDateTime} />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  color="error"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={cancelEditHandler}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  disabled={disabled}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
