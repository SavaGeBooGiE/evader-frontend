import axios from '../context/axios';
import { userProfileType } from '../types/types';

export default function fetchProfileData(token: string) {
  return axios.get<{ user: userProfileType }>('auth/profile/', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
}
