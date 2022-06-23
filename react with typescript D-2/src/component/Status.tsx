import React from 'react'
type StatusProps={
    status:'Loading' | 'Success' | 'Error' 
}
export const Status = (props:StatusProps) => {
    let message
    if(props.status === 'Loading'){
        message='loading.....';
    }else if(props.status ==='Success'){
        message='successful';
    }else if(props.status ==='Error'){
        message='Error';
    }
  return (
    <div>
        <h2>status - {message}</h2>
    </div>
  )
}
