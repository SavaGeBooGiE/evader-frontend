/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren } from 'react';
import EventNavbarExpandedItem from './event-navbar-expanded-item';

import * as styles from './styles';

export default function EventNavbarExpanded({
  expand,
  active,
  fields,
  changeActive,
}: PropsWithChildren<{
  expand: boolean;
  active: string;
  fields: string[];
  // eslint-disable-next-line no-unused-vars
  changeActive: (newActive: string) => void;
}>) {
  const notActive = fields.filter((field) => field !== active);

  return (
    <styles.Expanded expand={expand}>
      {notActive.map((field, index) => (
        <EventNavbarExpandedItem
          changeActive={changeActive}
          field={field}
          key={index}
        />
      ))}
    </styles.Expanded>
  );
}
