import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import classes from './sidebar.module.scss';

export default function SidebarHome({
  expand,
  active,
}: PropsWithChildren<{ expand: boolean; active: string }>) {
  return (
    <Link href="/">
      <a
        className={[
          'd-flex align-items-center',
          classes.sidebar_link,
          `${active === 'home' ? classes.sidebar_link_active : 'evader-dummy'}`,
        ].join(' ')}
      >
        <FaHome
          size="1.5rem"
          style={{
            marginLeft: '28px',
            marginRight: '28px',
            marginTop: '13px',
            marginBottom: '13px',
          }}
        />
        {expand ? 'Home' : ''}
      </a>
    </Link>
  );
}
