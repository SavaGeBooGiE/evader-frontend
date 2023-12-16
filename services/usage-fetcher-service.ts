import React from 'react';
import { useAuth } from '../context/auth';
import axios from '../context/axios';

interface Usage {
  created: number;
  invited: number;
}

export default function useUsageFetcher() {
  const { token } = useAuth();
  const [res, setRes] = React.useState<Usage>({
    created: 0,
    invited: 0,
  });

  React.useEffect(() => {
    let isMounted = true;

    axios
      .get<Usage>('event/usage/', {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        if (isMounted) {
          setRes(response.data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return res;
}
