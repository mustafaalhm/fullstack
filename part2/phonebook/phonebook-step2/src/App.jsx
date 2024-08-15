import { useState } from 'react'
import NoteBookName from '../components/NoteBookName'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const handelnameChange = (event) => {
    setNewName(event.target.value)

  }
  const addPerson = (event) => {
    event.preventDefault()
    // check if empty input 
    if (newName.length == 0) {
      alert(`name filed can not be empty please enter name`)
    } else {
      // check if name already found 
      console.log({ persons })
      const found = persons.find(isFoundName)
      if (found) {
        alert(`${newName}  is already added to phonebook`)
      } else {
        const newPerson = {
          id: String(persons.length + 1),
          name: newName,
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
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
        <div>
          name: <input value={newName} onChange={handelnameChange} />
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