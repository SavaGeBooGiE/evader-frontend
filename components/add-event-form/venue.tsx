import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

import Validate from '../../utils/form-validator';

export default function VenueField({
  venue,
  setVenue,
}: PropsWithChildren<{
  venue: string;
  setVenue: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const [invalid, setInvalid] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const changeVenueHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setInvalid(false);
    setMessage('');

    const inputVenue: string = e.target.value;
    const [result, error] = Validate.validateVenue(inputVenue);
    if (result) {
      setVenue(inputVenue);
      if (!inputVenue) {
        setInvalid(true);
        setMessage(error);
      }
    } else {
      setInvalid(true);
      setMessage(error);
    }
  };

  return (
    <TextField
      required
      fullWidth
      id="eventVenue"
      label="Venue"
      name="eventVenue"
      value={venue}
      onChange={changeVenueHandler}
      error={invalid}
      helperText={message}
    />
  );
}
