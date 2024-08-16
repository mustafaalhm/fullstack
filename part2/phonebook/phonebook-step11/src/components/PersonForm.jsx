import axios from "axios";
import React from "react";
import servicePerson from "../services/phonebook";




function PersonForm({
  newName,
  newPhone,
  setNewName,
  setNewPhone,
  persons,
  setPersons,
  message,
  setMessage
}) {
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
    event.preventDefault();
    // check if empty input
    if (newName.length == 0 || newPhone.length == 0) {
      setMessage(`name & password can not be empty `)
    
    } else {
      // check if name already found
      const found = persons.find(isFoundName);
      if (found) {
        if (
          window.confirm(
            `${newName} is already added to phonebook replace the old number with a new one`
          )
        ) {
          const person = persons.find((person) => person.id === found.id);
          const changedNumber = { ...person, number: newPhone };

          servicePerson
            .updateNumber(found.id, changedNumber)
            
              .then((response) => {
                setPersons(persons.concat(response));
                 setMessage(`${person.name} updated number successfully`)
                 setTimeout(() => {
                  setMessage(null)
                  window.location.reload();
                }, 3000)
                setNewName("");
                setNewPhone("");
            });
        }
      } else {
        const newPerson = {
          id: String(persons.length + 1),
          name: newName,
          number: newPhone,
        };
        servicePerson
          .createNew(newPerson)

          .then((response) => {
            setPersons(persons.concat(response));
             setMessage(`${newPerson.name} Added successfully`)
             setTimeout(() => {
              setMessage(null)
              window.location.reload();
            }, 3000)
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
