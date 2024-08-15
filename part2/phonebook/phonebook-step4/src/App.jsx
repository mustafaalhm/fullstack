import { useState } from "react";
import NoteBookName from "../components/NoteBookName";
import "./app.css";
const App = () => {
  const personsList =[
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]
  const [persons, setPersons] = useState(personsList);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  

  const handelnameChange = (event) => {
    setNewName(event.target.value);
  };

  const handelPhoneChange = (event) => {
    setNewPhone(event.target.value);
    console.log(newPhone);
  };
// search person 
 function handelSearchChange(event){
  const value = event.target.value
 
  const filtered = personsList.filter((person)=>person.name.toLowerCase().includes(value.toLowerCase()))
   
   setPersons(filtered)
   console.log(persons)
 }
  // add new phonebook
  const addPerson = (event) => {
    event.preventDefault();
    // check if empty input
    if (newName.length == 0 || newPhone.length == 0) {
      alert(`name or phone filed can not be empty please enter name`);
    } else {
      // check if name already found
      const found = persons.find(isFoundName);
      if (found) {
        alert(`${newName}  is already added to phonebook`);
      } else {
        const newPerson = {
          id: String(persons.length + 1),
          name: newName,
          phone: newPhone,
        };
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewPhone("");
      }
    }
  };
  function isFoundName(person) {
    return person.name === newName;
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div className="">
        <h3>filter shown with</h3>{" "}
        <input type="text" onChange={handelSearchChange} />
      </div>
      <form onSubmit={addPerson}>
        <div className="form">
          <div>
            name:{" "}
            <input value={newName} onChange={handelnameChange} autoFocus />
          </div>
          <div className="">
            phone: <input value={newPhone} onChange={handelPhoneChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* persons here */}

      <ul>
        {persons.map((person, i) => {
          return <NoteBookName key={i} person={person} />;
        })}
      </ul>
    </div>
  );
};

export default App;
