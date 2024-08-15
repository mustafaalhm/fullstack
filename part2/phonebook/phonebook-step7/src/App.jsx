import { useEffect, useState } from "react";
import NoteBookName from "../components/NoteBookName";
import "./app.css";
import Persons from "../components/Persons";
import PersonForm from "../components/PersonForm";
import axios from "axios";
const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchPerson, setSearchPerson] = useState("");
  const [filterPerson, setFilterPerson] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log({re:response.data})
      setPersons(response.data);
      setFilterPerson(response.data);
    });
  }, []);
  // search person
  function handelSearchChange(event) {
    const value = event.target.value;
    setSearchPerson(value);
    const filterItems = persons.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterPerson(filterItems)
    //  setPersons(filtered)
    //  console.log(persons)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div className="">
        <h3>filter shown with</h3>{" "}
        <input type="text" onChange={handelSearchChange} value={searchPerson} />
      </div>
      <h3>Add new</h3>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      {/* persons here */}

      <Persons filterPerson={filterPerson} />
    </div>
  );
};

export default App;
