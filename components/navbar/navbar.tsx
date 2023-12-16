import React from 'react';
import loadable from '@loadable/component';

import { GiHamburgerMenu } from 'react-icons/gi';

import { useAuth } from '../../context/auth';

import * as styles from './styles';

const NavbarHamburger = loadable(() => import('./navbar-hamburger'));
const NavbarBrand = loadable(() => import('./navbar-brand'));

export default function Navbar() {
  const { token } = useAuth();

  let content = null;
  if (token) {
    content = (
      <styles.NavbarContainer>
        <styles.NavbarList>
          <styles.HamburgerContainer>
            <NavbarHamburger
              fallback={<GiHamburgerMenu color="white" size="1.5rem" />}
            />
          </styles.HamburgerContainer>
          <styles.BrandContainer>
            <NavbarBrand fallback={<div> Evader </div>} />
          </styles.BrandContainer>
        </styles.NavbarList>
      </styles.NavbarContainer>
    );
  }

  return content;
}
