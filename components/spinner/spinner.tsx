import React, { PropsWithChildren } from 'react';

import * as styles from './styles';

export default function Spinner({ text }: PropsWithChildren<{ text: string }>) {
  return (
    <styles.SpinnerContainer>
      <styles.Name>Evader</styles.Name>
      <styles.Spinner />
      <styles.Text>{text}</styles.Text>
    </styles.SpinnerContainer>
  );
}
