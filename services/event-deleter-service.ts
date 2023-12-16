import axios from '../context/axios';

export default function EventDeleterService(eventId: number, token: string) {
  return axios.delete(`event/delete/${eventId}/`, {
    headers: { Authorization: `Token ${token}` },
  });
}
