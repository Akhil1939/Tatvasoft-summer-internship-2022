type HeroProps={
  names:{
    first:string
    last:string
  }[]
}
export const Hero = (props:HeroProps) => {
  return (
    <div>
      heros from Marvel

      <h2>{props.names.map(name =>{
        return(
          <h2 key={name.first}>{name.first} {name.last}</h2>
        )
      })}</h2>
      {/* <h2>Spider-Man</h2>
      <h2>DR. Strange</h2>
      <h2>Thor </h2> */}
    </div>
  )
}
