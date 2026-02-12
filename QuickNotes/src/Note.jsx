import { useState } from 'react'
import './Note.css'




export default function Note({ id, date, dateUpdate, title, text, deleteNote, openModal, updateNote, isEditable }) {
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentText, setCurrentText] = useState(text);

    return (
        <div className="note" onClick={() => openModal(id)}>
            {isEditable ? (
                <>
                    <div className='update'>
                        <input
                            value={currentTitle}
                            onChange={(e) => setCurrentTitle(e.target.value)}
                        />
                        <textarea
                            value={currentText}
                            onChange={(e) => setCurrentText(e.target.value)}
                        />
                        <button onClick={(e) => updateNote(e, id, currentTitle, currentText)}>
                            update
                        </button>
                    </div>
                </>
            ) : (<>
                <div className='dateAndButton'>
                    <div className='date'><small>created: {date}</small>  <br /></div>
                    <button onClick={(e) => deleteNote(e, id)}>X</button></div>
                <div className='date'><small>{dateUpdate ? `updated :" ${dateUpdate}` : ""}</small></div>
                <h3>{title}</h3>
                {text}
            </>)}
        </div>
    );
}