type person ={
    name:{
        first:string,
        last:string
    }
}
export const Person = (props: person) => {
  return (
    <div>
       {props.name.first} {props.name.last} 
    </div>
  )
}
