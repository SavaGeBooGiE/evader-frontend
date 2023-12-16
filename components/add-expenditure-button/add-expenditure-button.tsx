import React, { PropsWithChildren } from 'react';
import { IoMdAdd } from 'react-icons/io';

import * as styles from './styles';

export default function AddExpenditureButton({
  clickHandler,
  open,
}: PropsWithChildren<{ clickHandler: () => void; open: boolean }>) {
  return (
    <styles.AddButton
      open={open}
      color="primary"
      onClick={clickHandler}
      type="button"
    >
      <IoMdAdd color="white" size="1.5rem" />{' '}
    </styles.AddButton>
  );
}
