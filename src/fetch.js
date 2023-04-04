import axios from 'axios';
const BASE_URL = 'https://642c7f39bf8cbecdb4f216cb.mockapi.io/contacts';

export async function fetchContacts(id) {
  return await axios.get(`${BASE_URL}/${id}`).then(res => res.data);
}
