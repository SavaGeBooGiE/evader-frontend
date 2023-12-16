import axios from '../context/axios';

export default function DeleteExpenditureService(id: number, token: string) {
  return axios.delete(`event/expenditure/${id}/`, {
    headers: { Authorization: `Token ${token}` },
  });
}
