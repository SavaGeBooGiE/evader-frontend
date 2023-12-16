import React, { PropsWithChildren } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function State({
  current,
  changeCurrentHandler,
}: PropsWithChildren<{
  current: string;
  // eslint-disable-next-line no-unused-vars
  changeCurrentHandler: (value: string) => void;
}>) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const menuItem = current === 'Created' ? 'Invited' : 'Created';

  const toggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={['text-capitalize'].join(' ')} caret>
        {current}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          className={['text-capitalize'].join(' ')}
          onClick={() => changeCurrentHandler(menuItem)}
        >
          {menuItem}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
