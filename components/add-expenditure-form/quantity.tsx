import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';

export default function QuantityFIeld({
  quantity,
  setQuantity,
}: PropsWithChildren<{
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}>) {
  const changeQuantityHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (Number(e.target.value) >= 1) setQuantity(Number(e.target.value));
  };

  return (
    <TextField
      type="number"
      name="quantity"
      required
      fullWidth
      id="quantity"
      label="Quantity"
      value={quantity}
      onChange={changeQuantityHandler}
    />
  );
}
