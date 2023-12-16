import React, { PropsWithChildren } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import * as styles from './styles';

export default function Filter({
  filter,
  changeFilterHandler,
}: PropsWithChildren<{
  filter: string;
  // eslint-disable-next-line no-unused-vars
  changeFilterHandler: (val: string) => void;
}>) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const menuItem = filter === 'upcoming' ? 'completed' : 'upcoming';

  const toggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <styles.Filter isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={['text-capitalize'].join(' ')} caret>
        {filter}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          className={['text-capitalize'].join(' ')}
          onClick={() => changeFilterHandler(menuItem)}
        >
          {menuItem}
        </DropdownItem>
      </DropdownMenu>
    </styles.Filter>
  );
}
