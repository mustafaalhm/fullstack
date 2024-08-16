import axios from 'axios'

const NoteBookName = ({ person,setMessage,setMessageType }) => {

  const handelDelte = () => {
    if (window.confirm(`Delete ${person.name}`)) {
      const url = `http://localhost:3001/persons/${person.id}`;
      axios.delete(url).then((response) => {
        setMessage(`${person.name} Deleted Successfully`)
        setMessageType('success')
        setTimeout(() => {
          setMessage(null)
          setMessageType(null)
          window.location.reload();
        }, 3000)
      }).catch(err=>{
        setMessage(`${person.name} hasBeen deleted from server`)
        setMessageType('error')
        setTimeout(() => {
          setMessage(null)
          setMessageType(null)
          window.location.reload();
        }, 2000)
      })
    }
  };
  if (!person) {
    return <h2>there is no names</h2>;
  } else {
    return (
      <div className="phonebook">
        <li> {person.name}</li>
        <li> {person.number}</li>
        <button id="btn-del" onClick={handelDelte}>
          delete
        </button>
      </div>
    );
  }
};

export default NoteBookName;
