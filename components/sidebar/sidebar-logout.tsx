import React, { PropsWithChildren } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useAuth } from '../../context/auth';
import classes from './sidebar.module.scss';

export default function SidebarLogout({
  expand,
}: PropsWithChildren<{ expand: boolean }>) {
  const { signOutHandler } = useAuth();

  return (
    <button
      className={[
        'd-flex align-items-center',
        classes.sidebar_link,
        classes.logout_button,
      ].join(' ')}
      type="button"
      onClick={signOutHandler}
    >
      <BiLogOut
        size="1.5rem"
        style={{
          marginLeft: '28px',
          marginRight: '28px',
          marginTop: '13px',
          marginBottom: '13px',
        }}
      />
      {expand ? 'Logout' : ''}
    </button>
  );
}
