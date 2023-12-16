import React, { PropsWithChildren } from 'react';
import classes from './sidebar-content-wrapper.module.scss';

export default function Wrapper({ children }: PropsWithChildren<{}>) {
  return (
    <div className={['d-flex flex-wrap', classes.wrapper].join(' ')}>
      {children}
    </div>
  );
}
