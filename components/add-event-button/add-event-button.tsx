import React, { PropsWithChildren } from 'react';
import { IoMdAdd } from 'react-icons/io';

import * as styles from './styles';

export default function AddEvent({
  clickHandler,
  open,
}: PropsWithChildren<{ clickHandler: () => void; open: boolean }>) {
  return (
    <styles.AddButton
      color="dark"
      open={open}
      onClick={clickHandler}
      type="button"
    >
      <IoMdAdd size="1.5rem" color="white" data-testid="add-event-open-icon" />
    </styles.AddButton>
  );
}
