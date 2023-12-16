import React, { PropsWithChildren } from 'react';
import { Button } from 'reactstrap';

import { useAuth } from '../../context/auth';
import setInvitationStatusService from '../../services/set-invitation-status-service';

import * as styles from './styles';

export enum InvitationStatus {
  'Pending',
  'Accepted',
  'Declined',
}

export default function EventOverviewStatus({
  status,
  dateTime,
  id,
}: PropsWithChildren<{ status: number; dateTime: string; id: number }>) {
  const currDate = new Date().getTime();
  const eventDate = new Date(dateTime).getTime();
  const disabled = currDate >= eventDate;

  const [invitationStatus, setInvitationStatus] = React.useState<string>(
    InvitationStatus[status]
  );
  const { token } = useAuth();

  const changeInvitationStatus = (inviStatus: number) => {
    if (InvitationStatus[inviStatus] === invitationStatus) {
      return;
    }
    setInvitationStatus(InvitationStatus[inviStatus]);
    setInvitationStatusService(inviStatus, token!, id);
  };

  return (
    <styles.Container>
      <styles.CurrentStatus>
        <strong> Status : </strong>
        {invitationStatus}
      </styles.CurrentStatus>
      <styles.ModifyContainer>
        <Button
          color="primary"
          disabled={disabled}
          onClick={() => changeInvitationStatus(0)}
        >
          Pending
        </Button>
        <Button
          color="success"
          disabled={disabled}
          onClick={() => changeInvitationStatus(1)}
        >
          Accepted
        </Button>
        <Button
          color="danger"
          disabled={disabled}
          onClick={() => changeInvitationStatus(2)}
        >
          Declined
        </Button>
      </styles.ModifyContainer>
    </styles.Container>
  );
}
