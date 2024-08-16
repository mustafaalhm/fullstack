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
const handelDelete=(id)=>{
  const url =`${baseURl}/${id}`
  const request=axios.delete(url)
        return request.then(response => {
          console.log(response)
        })
}
const updateNumber=(id,newObj)=>{
  const url =`${baseURl}/${id}`
  const request = axios.put(url,newObj)
    return    request.then(response => {
          console.log(response)
        })
}
export default {
  getAll,
  createNew,
  handelDelete,
  updateNumber
};
