import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Button =({text,handelEvent})=>{
  return(
    <>
    <button onClick={handelEvent}>{text}</button>
    </>
  )
}

 const StatisticLine =({text ,value})=>{
    return(
      <>
      <h3>{text} {value} </h3>
      </>
    )
 }
const Statistics = (props) => {
  if(props.all === 0){
    return(
      <>
      <h3 style={{color:"red"}}>No feedBack Given </h3>
      </>
    )
  }else{
     return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="Positive" value={props.positive}/>
      

    </div>
  );
  }
 
};
function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const props = { good, neutral, bad };

  

  function handelGood() {
    setGood(good + 1);
    setTotal(total + 1);
  }
  function handelNeutral() {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }
  function handelBad() {
    setBad(bad + 1);
    setTotal(total + 1);
  }
  const average = (good -bad /total).toFixed(2)
  const positive =((100 * good) /total).toFixed(2)
  return (
    <>
      <div className='container'>
        <h1>Give feedBack</h1>
        <div className='btn'>
          <Button text="good" handelEvent={handelGood}/>
          <Button text="neutral" handelEvent={handelNeutral}/>
          <Button text="bad" handelEvent={handelBad}/>
          
        </div>

        <Statistics good={good} bad={bad} neutral={neutral} all={total} average={average} positive={positive}/>
      </div>
    </>
  );
}

export default App;
