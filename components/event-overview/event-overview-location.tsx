import React, { PropsWithChildren } from 'react';

import { Button } from 'reactstrap';
import { HiLocationMarker } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';

import * as styles from './styles';
import 'react-toastify/dist/ReactToastify.css';

export default function EventOverviewLocation({
  venue,
}: PropsWithChildren<{
  venue: string;
}>) {
  const getDirectionsHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const directionsURL = `https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude},${position.coords.longitude}&destination=${venue}`;
          window.open(directionsURL, '_blank');
        },
        (error) => {
          toast.error(error.message);
        }
      );
    } else {
      toast.error('Your browser does not support geolocation service');
    }
  };

  return (
    <>
      <styles.Container>
        <styles.LocationIcon>
          <HiLocationMarker size="2rem" />
        </styles.LocationIcon>
        <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>{venue}</div>
        <Button
          style={{ marginTop: '0.5rem' }}
          color="primary"
          type="button"
          onClick={getDirectionsHandler}
        >
          Get Directions
        </Button>
      </styles.Container>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
