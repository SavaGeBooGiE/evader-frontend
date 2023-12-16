import axios from '../context/axios';

export default function RemoveInvitationService(id: number, token: string) {
  return axios.delete(`event/invitation/remove/${id}/`, {
    headers: { Authorization: `Token ${token}` },
  });
}
