import React from 'react'
import { FaTimes } from "react-icons/fa";

const Task = ({ Task, Deletefunction , Reminder}) => {
    return (
        <div>
        <>
        {Task.map((task) => (
        <ul>
            <h1>{task.firstname}</h1>

        <FaTimes style={{color: "red", cursor: "pointer"}} onClick={() => Deletefunction(task.id)} onToggle={Reminder}/>
        
        </ul>
        
        ))}
        

        </>
       
        </div>
    )
}

export default Task
