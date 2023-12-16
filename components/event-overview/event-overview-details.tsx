import React, { PropsWithChildren } from 'react';

import * as styles from './styles';

export default function EventOverviewDetails({
  name,
  description,
  fireId,
}: PropsWithChildren<{ name: string; fireId: string; description: string }>) {
  return (
    <styles.Container>
      <styles.PictureContainer>
        <img
          src={`https://avatars.dicebear.com/api/jdenticon/${fireId}.svg`}
          alt=""
        />
      </styles.PictureContainer>
      <styles.Name>{name}</styles.Name>
      <styles.Description>{description}</styles.Description>
    </styles.Container>
  );
}
