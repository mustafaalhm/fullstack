import axios from "axios";
import React from "react";

function PersonForm({newName,newPhone,setNewName,setNewPhone,persons,setPersons}) {
    const handelnameChange = (event) => {
        setNewName(event.target.value);
      };
    
      const handelPhoneChange = (event) => {
        setNewPhone(event.target.value);
        console.log(newPhone);
      };
      function isFoundName(person) {
        return person.name === newName;
      }
       // add new phonebook
  const addPerson = (event) => {
    // event.preventDefault();
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
          number: newPhone,
        };
        axios.post('http://localhost:3001/persons',newPerson)
              .then(response=>{
                console.log(response)
                setPersons(persons.concat(response.data));
                 setNewName("");
                 setNewPhone("");
              })
        
      }
    }
  };
  return (
    <div>
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
    </div>
  );
}

export default PersonForm;
