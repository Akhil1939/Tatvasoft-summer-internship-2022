type helloProps = {
    name:string,
    count:number;
    isLogeed:boolean;
}
export const Hello =(props:helloProps)=> {
  return (
    <div>
      <h2>welcome {props.name} to hello</h2>
      <h2>welcome {props.name} count is {props.count}</h2>
      <h2>
        {
            props.isLogeed? `welcome ${props.name} you have ${props.count} messages`: `welcome gost mode`
        }
      </h2>
    </div>
  )
}
