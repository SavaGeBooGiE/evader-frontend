import React, { PropsWithChildren } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { CardBody } from 'reactstrap';

import { InvitationStatus } from '../event-overview/event-overview-status';

import * as styles from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/auth';
import RemoveInvitationService from '../../services/remove-invitation-service';
import EventEmitterService from '../../services/event-emitter-service';

export default function Guest({
  id,
  name,
  email,
  status,
}: PropsWithChildren<{
  id: number;
  name: string;
  email: string;
  status: number;
}>) {
  const { token } = useAuth();

  const removeGuestHandler: React.ChangeEventHandler = async (e) => {
    e.preventDefault();
    try {
      await RemoveInvitationService(id, token!);
      EventEmitterService('invitation_removed', { id });
    } catch (err: any) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <>
      <styles.CardContainer>
        <styles.Image
          src={`https://avatars.dicebear.com/api/adventurer-neutral/${email}.svg`}
          alt="..."
        />
        <styles.DeleteButton
          outline
          color="danger"
          onClick={removeGuestHandler}
        >
          <RiDeleteBin6Fill size="1.5rem" />
        </styles.DeleteButton>
        <CardBody>
          <styles.Title tag="h6">{name}</styles.Title>
          <styles.Text>{email}</styles.Text>
        </CardBody>
        <styles.Footer>
          <strong>Status:</strong>
          <styles.StatusText status={status}>
            {InvitationStatus[status]}{' '}
          </styles.StatusText>
        </styles.Footer>
      </styles.CardContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
