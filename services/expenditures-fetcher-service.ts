/* eslint-disable import/prefer-default-export */
import React from 'react';
import axios from '../context/axios';
import { useAuth } from '../context/auth';
import { ExpenditureType } from '../types/types';

export const useExpenditureFetcher = (eventId: string) => {
  const { token } = useAuth();
  const [expenditures, setExpenditures] = React.useState<ExpenditureType[]>([]);
  const [error, setError] = React.useState<number | null>(null);

  React.useEffect(() => {
    let isMounted = true;

    document.addEventListener('add_expenditure', (e: any) => {
      if (isMounted) {
        setExpenditures((prevExpenditures) =>
          prevExpenditures?.concat(e.detail)
        );
      }
    });

    document.addEventListener('expenditure_deleted', (e: any) => {
      if (isMounted) {
        setExpenditures((prevExpenditures) =>
          prevExpenditures.filter(
            (expenditure) => expenditure.id !== e.detail.id
          )
        );
      }
    });

    axios
      .get<ExpenditureType[]>(`event/expenditure/${eventId}/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        if (isMounted) {
          setExpenditures(res.data);
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

  return {
    expenditures,
    error,
  };
};
