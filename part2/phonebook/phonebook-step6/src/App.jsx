import { useEffect, useState } from "react";
import NoteBookName from "../components/NoteBookName";
import "./app.css";
import Persons from "../components/Persons";
import PersonForm from "../components/PersonForm";
import axios from 'axios'
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
  

 useEffect(()=>{
  axios
      .get('http://localhost:3001/persons')
      .then(response=>{
       setPersons(response.data)
      })
 },[])
// search person 
 function handelSearchChange(event){
  const value = event.target.value
 
  const filtered = personsList.filter((person)=>person.name.toLowerCase().includes(value.toLowerCase()))
   
   setPersons(filtered)
   console.log(persons)
 }
 
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div className="">
        <h3>filter shown with</h3>{" "}
        <input type="text" onChange={handelSearchChange} />
      </div>
        <h3>Add new</h3>
        <PersonForm newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      {/* persons here */}

    <Persons persons={persons}/>
    </div>
  );
};

export default App;
