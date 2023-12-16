import React from 'react';
import Link from 'next/link';

import * as styles from './styles';

export default function NavbarBrand() {
  return (
    <Link href="/">
      <styles.Brand>Evader</styles.Brand>
    </Link>
  );
}
