const NoteBookName = ({ person }) => {
  
  if(!person){
    return<h2>there is no names</h2>
  }else{
    return (
        <div className="phonebook">
         
         <li>  {person.name}</li>
        <li>  {person.number}</li>
        </div>
       
    
    )
  }
    
  }
  
  export default NoteBookName