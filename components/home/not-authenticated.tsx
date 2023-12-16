import React from 'react';
import loadable from '@loadable/component';
import { Button } from 'reactstrap';

import { useAuth } from '../../context/auth';

import * as styles from './styles';
import 'react-toastify/dist/ReactToastify.css';

const Particles = loadable(() => import('./particles'));

export default function IsNotAuth() {
  const { signInHandler } = useAuth();

  return (
    <>
      <Particles />
      <styles.IsNotAuthContainer>
        <styles.ProjectDetailsContainer>
          <styles.ProjectName> Evader </styles.ProjectName>
          <styles.ProjectSlogan>
            the all in one events management platform
          </styles.ProjectSlogan>
          <styles.ButtonContainer>
            <Button color="primary" onClick={signInHandler} type="button">
              Authenticate
            </Button>
          </styles.ButtonContainer>
        </styles.ProjectDetailsContainer>
      </styles.IsNotAuthContainer>
    </>
  );
}
