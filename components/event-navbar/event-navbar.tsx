import React, { PropsWithChildren } from 'react';
import loadable from '@loadable/component';

import Button from '@mui/material/Button';

import * as styles from './styles';

const EventNavbarExpanded = loadable(() => import('./event-navbar-expanded'));

export default function EventNavbar({
  active,
  fields,
  changeActive,
}: PropsWithChildren<{
  active: string;
  fields: string[];
  // eslint-disable-next-line no-unused-vars
  changeActive: (newActive: string) => void;
}>) {
  const [expand, setExpand] = React.useState<boolean>(false);

  const expandToggleHandler = () => {
    setExpand((prev) => !prev);
  };

  return (
    <>
      <styles.EventNavbarContainer>
        <Button
          onClick={expandToggleHandler}
          fullWidth
          style={{ height: '50px' }}
        >
          <styles.Active>{active}</styles.Active>
        </Button>
        <EventNavbarExpanded
          changeActive={changeActive}
          expand={expand}
          active={active}
          fields={fields}
        />
      </styles.EventNavbarContainer>
    </>
  );
}
