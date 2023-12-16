import axios from '../context/axios';

interface eventModifications {
  name: string;
  description: string;
  venue: string;
  time: Date;
}

export default function SaveEventSettingsService(
  eventId: string,
  token: string,
  data: eventModifications
) {
  return axios.put(`event/update/${eventId}/`, data, {
    headers: { Authorization: `Token ${token}` },
  });
}
