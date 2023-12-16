import React, { PropsWithChildren } from 'react';
import classes from './main-content-wrapper.module.scss';

export default function MainContentWrapper({
  color,
  children,
}: // eslint-disable-next-line react/require-default-props
PropsWithChildren<{ color?: string }>) {
  return (
    <div
      className={[classes.main_content_wrapper].join(' ')}
      style={{ backgroundColor: color || '#fff' }}
    >
      {children}
    </div>
  );
}
