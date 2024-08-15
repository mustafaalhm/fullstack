import axios from "axios";
const baseURl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseURl);
  return request.then((response) => response.data);
};
const createNew = (newObject) => {
  const request = axios.post(baseURl,newObject);
  return request.then((response) => response.data);
};

export default {
  getAll,
  createNew
};
