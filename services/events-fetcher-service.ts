/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useAuth } from '../context/auth';
import axios from '../context/axios';
import { EventType } from '../types/types';

const useEventsFetcher = () => {
  const { token } = useAuth();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [events, setEvents] = React.useState<EventType[]>([]);

  React.useEffect(() => {
    let isMounted = true;
    document.addEventListener('event_deleted', (e: any) => {
      if (isMounted) {
        setEvents((prev) => prev.filter((event) => event.id !== e.detail.id));
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setLoading(true);
    }
    axios
      .get<EventType[]>('event/fetch/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        if (isMounted) {
          setEvents(res.data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { events, loading };
};

export { useEventsFetcher };
