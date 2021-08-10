import { useState } from "react";
import Task from "./components/Task.js";
import AddTask from "./components/AddTask";

function App() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  let data = {
    
    "firstname": firstname,
    "lastname": lastname
  }

  const addsomethingtodata = (firstname, lastname) => {
    let requestobject = 
      {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
      }
      
    
      
    
    fetch("http://localhost:3000/items", requestobject)
      .then((response) => response.json())
      .then((data) => console.log(data));
    
    



    
  }
  return (
    <div className="app">
      <input placeholder="Enter your name " onChange={event => setFirstName(event.target.value)}></input>
      <input placeholder="Enter your lastname" onChange={event => setLastName(event.target.value)}></input>
      <button onClick={() => addsomethingtodata(firstname, lastname)}>Submit</button>


    </div>
  );
}

export default App;
