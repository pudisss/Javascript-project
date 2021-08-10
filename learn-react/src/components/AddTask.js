import React from 'react'
import { Fatimes } from "react-icons/fa";
import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState("");
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-day-time">
                <label>Task</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}></input>

                
            </div>

            <div className="form-checkbox">
                <label>Task</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.target.value)}></input>
            </div>
            <input type="submit" value="submit-task"></input>
        </form>
        
    )
}

export default AddTask
