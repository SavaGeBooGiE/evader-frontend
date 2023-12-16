import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

import Validate from '../../utils/form-validator';

export default function NameField({
  name,
  setName,
}: PropsWithChildren<{
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const [invalid, setInvalid] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const changeNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInvalid(false);
    setMessage('');

    const inputName: string = e.target.value;
    const [result, error] = Validate.validateName(inputName);
    if (result) {
      setName(inputName);
      if (!inputName) {
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
      name="eventName"
      required
      fullWidth
      id="eventName"
      label="Name"
      value={name}
      onChange={changeNameHandler}
      error={invalid}
      helperText={message}
    />
  );
}
