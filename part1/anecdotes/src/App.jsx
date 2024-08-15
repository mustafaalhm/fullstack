import { useState } from "react";
import "./App.css";
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(anecdotes.map(()=>0));
  const [mostVote,setmostVote]= useState(0)
 console.log({vote})
  function handelClicked() {
    let random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  }
  const voteForAnecdote = () => {
      const newVote =[...vote]
      newVote[selected] += 1;
      setVote(newVote)

      if(newVote[selected] > vote[mostVote]){
        setmostVote(selected)
      }
  };
 
  return (
    <div>
       <div className='content'>{anecdotes[selected]}</div>
       <p>has {vote[selected]}Vote </p>
      <button onClick={handelClicked}>next anecdote </button>
      
      <button onClick={voteForAnecdote} >vote</button>
      <div className="largeVoted">
        <h2>Anecdote with most vote</h2>
        <p id="mostvote">{
              anecdotes[mostVote]
          }</p>
          <h3>has {vote[mostVote]} vote </h3>
      </div>
    </div>
  );
};

export default App;
