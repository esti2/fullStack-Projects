import { useState } from "react"
import './Form.css'

export default function Form({ addNotes }) {

    const [value, setValue] = useState("")
    const [title, setTitle] = useState("")

    return (<>
        <div className="form">
            <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <textarea className="borderBlue" placeholder="your note..." onChange={(e) => setValue(e.target.value)}
                value={value}></textarea>
            <button onClick={() => addNotes(title, value)}>Add</button>
        </div>
    </>)
}