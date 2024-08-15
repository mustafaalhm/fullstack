import React from 'react'
import NoteBookName from './NoteBookName';

function Persons({persons}) {
  return (
    <div>
        
        <ul>
        {persons.map((person, i) => {
          return <NoteBookName key={i} person={person} />;
        })}
      </ul>
    </div>
  )
}

export default Persons