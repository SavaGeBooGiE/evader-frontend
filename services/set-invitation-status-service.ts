import axios from '../context/axios';

export default function setInvitationStatusService(
  status: number,
  token: string,
  id: number
) {
  return axios.post(
    `event/invitation/status/${id}/`,
    { status },
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
}
