import React from 'react';
import axios from '../context/axios';
import { useAuth } from '../context/auth';
import { EventType } from '../types/types';

export default function useInvitedEventsFetcher() {
  const { token } = useAuth();
  const [invitedEvents, setInvitedEvents] = React.useState<EventType[]>([]);

  React.useEffect(() => {
    let isMounted = true;
    axios
      .get<EventType[]>('event/fetch/invited', {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        if (isMounted) {
          setInvitedEvents(res.data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return invitedEvents;
}
