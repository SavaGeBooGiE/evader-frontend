import React, { PropsWithChildren } from 'react';
import loadable from '@loadable/component';

import * as styles from './styles';

const Filter = loadable(() => import('./filter'));
const State = loadable(() => import('./state'));

export default function EventsNavbar({
  filter,
  choosen,
  changeFilterHandler,
  clickHandler,
}: PropsWithChildren<{
  filter: string;
  choosen: string;
  // eslint-disable-next-line no-unused-vars
  clickHandler: (val: string) => void;
  // eslint-disable-next-line no-unused-vars
  changeFilterHandler: (val: string) => void;
}>) {
  return (
    <>
      <styles.Navbar>
        <styles.List>
          <li>
            <State current={choosen} changeCurrentHandler={clickHandler} />
          </li>
          <li>
            <Filter filter={filter} changeFilterHandler={changeFilterHandler} />
          </li>
        </styles.List>
      </styles.Navbar>
    </>
  );
}
