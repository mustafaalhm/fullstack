import axios from 'axios'

const NoteBookName = ({ person }) => {

  const handelDelte = () => {
    if (window.confirm(`Delete ${person.name}`)) {
      const url = `http://localhost:3001/persons/${person.id}`;
      axios.delete(url).then((response) => {
        
      });
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
