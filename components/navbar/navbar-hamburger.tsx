import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useSidebar } from '../../context/sidebar';

import * as styles from './styles';

export default function NavbarHamburger() {
  const { expand, setExpand } = useSidebar();

  return (
    <styles.Hanburger type="button" onClick={() => setExpand((prev) => !prev)}>
      {expand ? (
        <AiOutlineClose size="1.5rem" color="white" />
      ) : (
        <GiHamburgerMenu color="white" size="1.5rem" />
      )}
    </styles.Hanburger>
  );
}
