import Note from "./Note";
import './NotesGrid.css'

export default function NotesGrid({ notes, deleteNote, openModal, updateNote, isEditable }) {


    return (
        <div className="NotesGrid">
            {notes.map((note, index) => (
                <Note key={note.id} id={note.id} date={note.date} dateUpdate={note.dateUpdate} title={note.title} text={note.note} deleteNote={deleteNote} openModal={openModal} updateNote={updateNote} isEditable={false} />
            ))}
        </div>
    );
}

