import React, { PropsWithChildren } from 'react';
import moment from 'moment';

import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function DateField({
  date,
  setDate,
}: PropsWithChildren<{
  date: moment.Moment;
  setDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}>) {
  const [invalid, setInvalid] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const changeDateHandler = (newValue: any) => {
    setInvalid(false);
    setMessage('');

    if (newValue > moment()) {
      setDate(newValue);
    } else {
      setInvalid(true);
      setMessage('Date and time must be greater than current moment');
    }
  };

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Date"
          value={date}
          onChange={(newValue) => changeDateHandler(newValue)}
          renderInput={(params) => (
            <TextField {...params} error={invalid} helperText={message} />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
