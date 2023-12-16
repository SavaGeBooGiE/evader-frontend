import React, { PropsWithChildren } from 'react';

import { Button } from 'reactstrap';
import { BsCalendarFill } from 'react-icons/bs';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';

import * as styles from './styles';
import 'react-toastify/dist/ReactToastify.css';

declare let gapi: any;

export default function EventOverviewDate({
  time,
  duration,
  venue,
  name,
  description,
}: PropsWithChildren<{
  time: string;
  duration: number;
  venue: string;
  name: string;
  description: string;
}>) {
  const addToGoogleCalendar = async () => {
    const event = {
      summary: name,
      description,
      location: venue,
      start: { dateTime: time },
      end: { dateTime: moment(time).add(duration, 's').toISOString() },
    };

    try {
      await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });
      toast.success('Event added to Google Calendar');
    } catch (err) {
      toast.error('Failed to add event to Google Calendar');
    }
  };

  return (
    <>
      <styles.Container>
        <styles.CalendarIcon>
          <BsCalendarFill size="2rem" />
        </styles.CalendarIcon>
        <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
          {moment(time).format('dddd, MMMM Do YYYY, h:mm a')}
        </div>
        <Button
          color="primary"
          type="button"
          onClick={addToGoogleCalendar}
          style={{ marginTop: '0.5rem' }}
        >
          Add to Calendar
        </Button>
      </styles.Container>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
