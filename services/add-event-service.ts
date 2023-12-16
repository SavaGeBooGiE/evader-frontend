import axios from '../context/axios';
import { EventType } from '../types/types';

export default async function AddEventService(
  name: string,
  description: string,
  venue: string,
  time: string,
  duration: number,
  fireId: string,
  token: string
) {
  return axios.post<EventType>(
    'event/create/',
    {
      name,
      description,
      venue,
      time,
      duration,
      fireId,
    },
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
}
