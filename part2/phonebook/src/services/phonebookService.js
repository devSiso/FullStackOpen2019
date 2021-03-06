import axios from 'axios';
const URL = 'http://localhost:3008/persons';

const getAll = () => {
  const req = axios.get(URL);
  return req.then(response => response.data);
}

const create = newObject => {
  const req = axios.post(URL, newObject);
  return req.then(response => response.data);
}

const update = (id, newObject) => {
  const req = axios.put(`${URL}/${id}`, newObject);
  return req.then(response => response.data);
}

const deletePerson = id => {
  const req = axios.delete(`${URL}/${id}`);
  return req.then(response => response.data);
}

export default {
  getAll,
  create,
  update,
  deletePerson
}
