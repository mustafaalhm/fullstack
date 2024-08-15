import { useState } from 'react'
import NoteBookName from '../components/NoteBookName'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const handelnameChange=(event)=>{
    setNewName(event.target.value)
   
  }
  const addPerson=(event)=>{
    event.preventDefault()
    const newPerson ={
      id:String(persons.length +1),
      name:newName,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
     
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handelnameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* persons here */}
     
      <ul>
        {
          persons.map((person,i)=>{
            return(
               <NoteBookName key={i} person={person}/>
            )
          })
        }
      </ul>
     
    </div>
  )
}


export default App;