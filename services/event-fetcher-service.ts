import React from 'react';
import { useAuth } from '../context/auth';
import axios from '../context/axios';
import { EventType } from '../types/types';

export default function useEventFetcher(id: string) {
  const [event, setEvent] = React.useState<EventType>({} as EventType);
  const [error, setError] = React.useState<number | null>(null);
  const { token } = useAuth();

  React.useEffect(() => {
    let isMounted = true;
    axios
      .get<EventType>(`event/fetch/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        if (isMounted) {
          setEvent(res.data);
        }
      })
      .catch((err: any) => {
        if (isMounted) {
          setError(err.response.status);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { event, error };
}
