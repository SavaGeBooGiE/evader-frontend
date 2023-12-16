import React, { PropsWithChildren } from 'react';

import moment from 'moment';

import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function TimeField({
  time,
  setTime,
}: PropsWithChildren<{
  time: moment.Moment;
  setTime: React.Dispatch<React.SetStateAction<moment.Moment>>;
}>) {
  const [invalid, setInvalid] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const changeTimeHandler = (newValue: any) => {
    setInvalid(false);
    setMessage('');

    if (newValue > moment()) {
      setTime(newValue);
    } else {
      setInvalid(true);
      setMessage('Date and time must be greater than current moment');
    }
  };

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <TimePicker
          label="Time"
          value={time}
          onChange={(newValue) => changeTimeHandler(newValue)}
          renderInput={(params) => (
            <TextField {...params} error={invalid} helperText={message} />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
