import React from 'react'
import NoteBookName from './NoteBookName';
import axios from 'axios'
function Persons({filterPerson ,setMessage ,setMessageType}) {
  
  return (
    <div>
        
        <ul>
        {filterPerson.map((person, i) => {
          return <NoteBookName key={i} person={person}  setMessage={setMessage} setMessageType={setMessageType}/>;
        })}
      </ul>
    </div>
  )
}

export default Persons