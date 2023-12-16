import React, { PropsWithChildren } from 'react';
import loadable from '@loadable/component';

import { toast, ToastContainer } from 'react-toastify';
import { Container, Row } from 'reactstrap';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import useFetchGuests from '../../services/fetch-guests-service';

import * as styles from './styles';
import 'react-toastify/dist/ReactToastify.css';

const Guest = loadable(() => import('../guest/guest'));
const AddGuestForm = loadable(() => import('./add-guest-form'));

export default function Guests({
  eventId,
  creator,
}: PropsWithChildren<{ eventId: string; creator: boolean }>) {
  const { guests, error } = useFetchGuests(eventId);
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (val: boolean) => {
    setDrawer(val);
  };

  React.useEffect(() => {
    if (error) {
      if (error === 404) {
        toast.error('Event with this id not found');
      } else if (error === 403) {
        toast.error('User not permitted to access this event guest list');
      } else {
        toast.error('Request failed with status code 400');
      }
    }
  }, [error]);

  const guestCards = guests.map((guest) => (
    <styles.GuestCardContainer key={guest.email}>
      <Guest
        id={guest.id}
        name={guest.name}
        email={guest.email}
        status={guest.status}
      />
    </styles.GuestCardContainer>
  ));

  return (
    <>
      <Container fluid>
        {creator && (
          <Row>
            <Button onClick={() => toggleDrawer(true)}>Add Guest</Button>
            <Drawer
              anchor="top"
              open={drawer}
              onClose={() => toggleDrawer(false)}
            >
              <AddGuestForm id={eventId} />
            </Drawer>
          </Row>
        )}
        <Row>{guestCards}</Row>
      </Container>
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
