/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren } from 'react';

export default function EventNavbarExpandedItem({
  changeActive,
  field,
}: PropsWithChildren<{
  // eslint-disable-next-line no-unused-vars
  changeActive: (newActive: string) => void;
  field: string;
}>) {
  return (
    <div>
      <a
        className={['btn btn-dark'].join(' ')}
        role="button"
        onClick={() => changeActive(field)}
      >
        {field}
      </a>
    </div>
  );
}
