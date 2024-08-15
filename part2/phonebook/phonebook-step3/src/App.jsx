import { useState } from 'react'
import NoteBookName from '../components/NoteBookName'
import './app.css'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handelnameChange = (event) => {
    setNewName(event.target.value)
    
  }
  const handelPhoneChange = (event) => {
    setNewPhone(event.target.value)
    console.log(newPhone)
  }
  const addPerson = (event) => {
    event.preventDefault()
    // check if empty input 
    if (newName.length == 0 || newPhone.length == 0) {
      alert(`name or phone filed can not be empty please enter name`)
    } else {
      // check if name already found 
      const found = persons.find(isFoundName)
      if (found) {
        alert(`${newName}  is already added to phonebook`)
      } else {
        const newPerson = {
          id: String(persons.length + 1),
          name: newName,
          phone:newPhone
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewPhone('')
      }
    }


  }
  function isFoundName(person) {
    return person.name === newName;

  }
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div >
          name: <input value={newName} onChange={handelnameChange} />
          
        </div>
        <div className="">
          phone: <input value={newPhone } onChange={handelPhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* persons here */}

      <ul>
        {
          persons.map((person, i) => {
            return (
              <NoteBookName key={i} person={person} />
            )
          })
        }
      </ul>

    </div>
  )
}


export default App;