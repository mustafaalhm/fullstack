import { useEffect, useState } from 'react'
import Note from './components/Note'
import noteService from './Services/notes'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  useEffect(()=>{
    noteService.getAll()
          .then(intialNotes =>{
            setNotes(intialNotes)
          })
  },[])
  const toggleImportance =(id)=>{
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n=> n.id === id)
    const changeNote ={...note,important: !note.important}
    noteService.update(id,changeNote)
          .then(returnUpdated =>{
            
            setNotes(notes.map((note) => note.id !== id ? note:returnUpdated))
           
          })
          .catch(error => {
            alert(
              `the note '${note.content}' was already deleted from server`
            )
            setNotes(notes.filter(n => n.id !== id))
          })
    
   }
  const addNote = (event) => {
    
    event.preventDefault()
    const newObject ={
      content :newNote,
      important: Math.random() < 0.5,
      id:String(notes.length +1)
    }
    noteService.create(newObject)
         .then(returnedNote =>{
           setNotes(notes.concat(returnedNote))
           setNewNote('')
         })

   
   
  }
  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewNote(event.target.value)
  }
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)
 
  return (
    <div>
      <h1>Notes</h1>
      <div className="">
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ?'important' :'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={()=>toggleImportance(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 