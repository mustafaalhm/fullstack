 // Error handlin

 export const NotificationMessage = ({ message ,type}) => {
    
    if (message === null) {
      return null
    }else{
       return (
      <div className={`${type === 'error' ? 'error' :'success'}`}>
        {message}
      </div>
    )
    }
  
   
  }