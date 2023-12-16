import axios from '../context/axios';
import { GuestType } from '../types/types';

export default async function invitePeople(
  id: string,
  email: string,
  token: string
) {
  return axios.post<GuestType>(
    `event/invite/${id}/`,
    { email },
    { headers: { Authorization: `Token ${token}` } }
  );
}
