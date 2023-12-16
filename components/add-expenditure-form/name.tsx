import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

export default function NameField({
  name,
  setName,
}: PropsWithChildren<{
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const changeNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  return (
    <TextField
      name="name"
      required
      fullWidth
      id="name"
      label="Name"
      value={name}
      onChange={changeNameHandler}
    />
  );
}
