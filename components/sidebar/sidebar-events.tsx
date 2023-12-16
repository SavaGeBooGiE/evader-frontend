import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { MdEventNote } from 'react-icons/md';
import classes from './sidebar.module.scss';

export default function SidebarEvents({
  expand,
  active,
}: PropsWithChildren<{ expand: boolean; active: string }>) {
  return (
    <Link href="/events">
      <a
        className={[
          'd-flex align-items-center',
          classes.sidebar_link,
          `${
            active === 'events' ? classes.sidebar_link_active : 'evader-dummy'
          }`,
        ].join(' ')}
      >
        <MdEventNote
          size="1.5rem"
          style={{
            marginLeft: '28px',
            marginRight: '28px',
            marginTop: '13px',
            marginBottom: '13px',
          }}
        />
        {expand ? 'Events' : ''}
      </a>
    </Link>
  );
}
