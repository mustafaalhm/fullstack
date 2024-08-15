import React from 'react'
import NoteBookName from './NoteBookName';

function Persons({filterPerson}) {
  
  return (
    <div>
        
        <ul>
        {filterPerson.map((person, i) => {
          return <NoteBookName key={i} person={person} />;
        })}
      </ul>
    </div>
  )
}

export default Persons