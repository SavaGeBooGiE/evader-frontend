import React, { PropsWithChildren } from 'react';
import * as styles from './styles';

export default function NotFound({
  text,
}: PropsWithChildren<{ text: string }>) {
  return (
    <styles.Container>
      <img src="/magnifying_glass.svg" alt="" />
      <div>{text}</div>
    </styles.Container>
  );
}
