import "./resource/css/index.css";
import {useState} from "react";

function App() {
  const [topicname, setTopic] = useState("");
  const [todo, setTodo] = useState("");



  const appendChild = () => {
    let todolist = document.createElement("div");
    let topic = document.createElement("h1");
    let cancel = document.createElement("div");


    // Getting the value in the input tags
    let topicname = document.getElementById("Topic");
    let todolistvalue = document.getElementById("Todolist").value;

    // Styling the new element that was made

    todolist.style.border = "1px solid black";
    todolist.style.width = "300px";
    todolist.style.height = "50px";
    todolist.style.marginLeft = "4rem";
    todolist.style.marginRight = "3rem";

  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="header">To-do-list</h1>
        <form className="form">
        <input type="text" id="Topic" placeholder="Enter the topic" value={topicname}></input>
        <input type="text" id="Todolist" placeholder="Enter the to do list" value={todo}></input>

        <button className="submit">Submit</button>
        </form>
       
      </div>

      <div className="To-do-list" id="To-do-list">

        <h1 className="header">To do list</h1>

      </div>
      
    </div>
  );
}

export default App;
