import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

export default function UnitPriceField({
  unitPrice,
  setUnitPrice,
}: PropsWithChildren<{
  unitPrice: number;
  setUnitPrice: React.Dispatch<React.SetStateAction<number>>;
}>) {
  const changeUnitPriceHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (Number(e.target.value) >= 1) setUnitPrice(Number(e.target.value));
  };

  return (
    <TextField
      type="number"
      name="unitprice"
      required
      fullWidth
      id="unitprice"
      label="Unit Price"
      value={unitPrice}
      onChange={changeUnitPriceHandler}
    />
  );
}
