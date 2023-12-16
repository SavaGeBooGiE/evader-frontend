import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

export default function DescriptionField({
  desc,
  setDesc,
}: PropsWithChildren<{
  desc: string;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const editDescriptionHandler: React.ChangeEventHandler<HTMLTextAreaElement> =
    (e) => {
      setDesc(e.target.value);
    };

  return (
    <TextField
      name="desc"
      required
      fullWidth
      id="desc"
      label="Description"
      value={desc}
      onChange={editDescriptionHandler}
    />
  );
}
