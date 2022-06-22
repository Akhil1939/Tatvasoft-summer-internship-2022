import React from "react"

type BtnProps={
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number)=>void
}
export const Button=(props : BtnProps)=>{
    return(
        <button onClick={(event)=>props.handleClick(event, 1)}> CLick mee</button>
    )
}