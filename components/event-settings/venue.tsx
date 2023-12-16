import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

import Validate from '../../utils/form-validator';

export default function DescriptionField({
  venue,
  setVenue,
}: PropsWithChildren<{
  venue: string;
  setVenue: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const [invalid, setInvalid] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const editVenueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
      name="venue"
      required
      fullWidth
      id="venue"
      label="Venue"
      value={venue}
      onChange={editVenueHandler}
      error={invalid}
      helperText={message}
    />
  );
}
