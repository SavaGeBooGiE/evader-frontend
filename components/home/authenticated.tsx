import React from 'react';
import { useAuth } from '../../context/auth';

import useUsageFetcher from '../../services/usage-fetcher-service';

import * as styles from './styles';

export default function IsAuth() {
  const { fireUser } = useAuth();
  const usage = useUsageFetcher();

  return (
    <styles.IsAuthContainer>
      <styles.ImageContainer>
        <img
          src={`https://avatars.dicebear.com/api/adventurer-neutral/${fireUser?.email}.svg`}
          alt=""
        />
      </styles.ImageContainer>
      <styles.Intro>It&apos;s good to see you again,</styles.Intro>
      <styles.FullName>{fireUser?.displayName}</styles.FullName>
      <styles.UsageContainer>
        <styles.Usage>
          <div>Created</div>
          <styles.UsageParam>{usage.created}</styles.UsageParam>
        </styles.Usage>
        <styles.Usage>
          <div>Invited</div>
          <styles.UsageParam>{usage.invited}</styles.UsageParam>
        </styles.Usage>
      </styles.UsageContainer>
    </styles.IsAuthContainer>
  );
}
