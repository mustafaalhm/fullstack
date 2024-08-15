import React from 'react'

function Filter() {
// search person 
function handelSearchChange(event){
    const value = event.target.value
   
    const filtered = personsList.filter((person)=>person.name.toLowerCase().includes(value.toLowerCase()))
     
     setPersons(filtered)
     console.log(persons)
   }

    
  return (
    <div className="">
        <h3>filter shown with</h3>{" "}
        <input type="text" onChange={handelSearchChange} />
      </div>
  )
}

export default Filter