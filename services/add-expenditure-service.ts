/* eslint-disable import/prefer-default-export */
import axios from '../context/axios';
import { ExpenditureType } from '../types/types';

export const AddExpenditure = async (
  token: string,
  eventId: string,
  name: string,
  organization: string,
  unitPrice: number,
  quantity: number
) =>
  axios.post<ExpenditureType>(
    `event/expenditure/${eventId}/`,
    {
      name,
      organization,
      unitPrice,
      quantity,
    },
    {
      headers: { Authorization: `Token ${token}` },
    }
  );
