const NoteBookName = ({ person }) => {
  
  if(!person){
    return<h2>there is no names</h2>
  }else{
    return (
      
        <li>{person.name}</li>
    
    )
  }
    
  }
  
  export default NoteBookName