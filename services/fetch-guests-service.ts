import React from 'react';
import { useAuth } from '../context/auth';
import axios from '../context/axios';
import { GuestType } from '../types/types';

export default function useFetchGuests(eventId: string) {
  const { token } = useAuth();
  const [guests, setGuests] = React.useState<GuestType[]>([]);
  const [error, setError] = React.useState<number | null>(null);

  React.useEffect(() => {
    let isMounted = true;

    document.addEventListener('invitation_removed', (e: any) => {
      if (isMounted) {
        setGuests((prevGuests) =>
          prevGuests.filter((guest) => guest.id !== e.detail.id)
        );
      }
    });

    document.addEventListener('invitation_added', (e: any) => {
      if (isMounted) {
        setGuests((prevGuests) => [...prevGuests, e.detail]);
      }
    });

    axios
      .get<GuestType[]>(`event/fetch/${eventId}/guests/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        if (isMounted) {
          setGuests(res.data);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.response.status);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { guests, error };
}
