import "./App.css";
import { Hello } from "./component/hello";
import { Hero } from "./component/Hero";
import { Person } from "./component/person";
import { Status } from "./component/Status";
import { Button } from "./component/event/button";
import { Input } from "./component/event/input";
import { User } from "./component/hooks/user";
import { ThemeContextProvider } from "./component/context/TheamContext";
import { Box } from "./component/context/Box";
import {Hash} from "./component/usememo/Hash"
function App() {
  const personName = {
    first: "bruce",
    last: "wain",
  };
  const heroName = [
    {
      first: "Iron",
      last: "Man",
    },
    {
      first: "Spider",
      last: "Main",
    },
    {
      first: "Dr",
      last: "Strange",
    },
    {
      first: "Thor",
      last: "Thunder",
    },
  ];
  const name: string = "akhil";
  return (
    <div className="App">
      <Hello  name={name} count= {2} isLogeed={true} />

      <Person name={personName} />

      <Hero names={heroName} />

      {/* <Status status ="Loading" />

      {/* <Button handleClick={(event, id)=>{
  console.log("Button Clickeddd", event,id)
}} /> */}

      {/* <Input value='' handleChange={(event)=> console.log(event) } /> */}

      {/* <User /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      <Hash />
    </div>
  );
}

export default App;
