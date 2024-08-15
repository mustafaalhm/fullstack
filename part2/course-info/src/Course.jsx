const Heading =({course})=>{
    return(
      <>
      <h2>{course}</h2>
      </>
    )
  }
  const Content =({parts})=>{
    
    return(
      <div className="">
        {
          parts.map((part,i)=>{
           return(
            <Part key={part.id} part={part}/>
           )
            
          })
        }
      </div>
    )
  }
  const Part =({part})=>{
   
    return(
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
  }
  const Total =({parts})=>{
    return <h6 id='total'>Total of 
      {parts.reduce((sum,part)=> sum + part.exercises ,0)} exercises
    </h6>
    }
  const Course =({course})=>{
   
    return(
      <>
     
      {/* heading */}
        <Heading course={course.name}/>
  
        {/* parts */}
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
  }

  export default Course;