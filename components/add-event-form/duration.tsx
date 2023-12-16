import React, { PropsWithChildren } from 'react';

import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export function UnitField({
  unit,
  setUnit,
}: PropsWithChildren<{
  unit: number;
  setUnit: React.Dispatch<React.SetStateAction<number>>;
}>) {
  const changeUnitHandler = (e: any) => {
    setUnit(Number(e.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="eventUnit">Unit</InputLabel>
      <Select
        labelId="eventUnit"
        id="demo-simple-select"
        value={unit}
        label="Unit"
        onChange={changeUnitHandler}
      >
        <MenuItem value={1}>Minutes</MenuItem>
        <MenuItem value={2}>Hours</MenuItem>
        <MenuItem value={3}>Days</MenuItem>
      </Select>
    </FormControl>
  );
}

export function DurationField({
  duration,
  setDuration,
}: PropsWithChildren<{
  duration: number;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
}>) {
  const changeDurationHandler = (e: any) => {
    const inputDuration = Number(e.target.value);
    if (inputDuration >= 1) setDuration(inputDuration);
  };

  return (
    <TextField
      fullWidth
      label="Duration"
      id="eventDuration"
      name="eventDuration"
      type="number"
      value={duration}
      onChange={changeDurationHandler}
    />
  );
}
