import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

export default function OrganizationField({
  organization,
  setOrganization,
}: PropsWithChildren<{
  organization: string;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const changeOrganizationHandler: React.ChangeEventHandler<HTMLInputElement> =
    (e) => {
      setOrganization(e.target.value);
    };

  return (
    <TextField
      name="organization"
      required
      fullWidth
      id="organization"
      label="Organization"
      value={organization}
      onChange={changeOrganizationHandler}
    />
  );
}
