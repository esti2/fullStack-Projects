import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NotesGrid from './NotesGrid'
import Form from './Form'
import { Modal, TextInput } from '@mantine/core';
import Note from "./Note";
import { useState, useEffect } from 'react'

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).replace(',', '').replace(/(\d+)/, (m) => {
    const day = parseInt(m);
    const suffix = day >= 11 && day <= 13 ? 'th' :
      ['th', 'st', 'nd', 'rd'][day % 10] || 'th';
    return day + suffix;
  });
}

let noteCounter = 0;

function App() {
  const [notes, setNotes] = useState(loadNotes);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [search, setSearch] = useState("");


  useEffect(() => {
    localStorage.setItem('QuickNotes', JSON.stringify(notes));
  }, [notes]);

  function loadNotes() {
    const save = localStorage.getItem('QuickNotes');
    return save ? JSON.parse(save) : [];
  }

  function addNotes(title, note) {
    noteCounter = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
    const now = new Date();
    const timeCreated = formatDate(now);
    let newNotes = [...notes]
    newNotes.push({ note: note, title: title, date: timeCreated, id: noteCounter });
    setNotes(newNotes);
  }

  function deleteNote(e, id) {
    e.stopPropagation();
    const isConfirmed = confirm("Are you sure you want to delete your note?");
    if (isConfirmed) {
      let newNotes = [...notes]
      const indexDelete = newNotes.findIndex(n => n.id === id)
      if (indexDelete !== -1) {
        newNotes.splice(indexDelete, 1);
        setNotes(newNotes);
      }
    }
    setModalOpen(false);
  }

  function openModal(id) {
    const note = notes.find(n => n.id === id);
    setSelectedNote(note);
    setModalOpen(true);
  }

  function updateNote(e, id, updateTitle, updateText) {
    e.stopPropagation();
    setModalOpen(false);
    const now = new Date();
    const timeUpdate = formatDate(now);
    const updatedNotesArray = notes.map(n => {
      if (n.id === id) {
        return { ...n, title: updateTitle, note: updateText, dateUpdate: timeUpdate };
      }
      return n;
    });
    setNotes(updatedNotesArray);
    setSelectedNote(null);
  }

  function filterNote() {
    return notes.filter(n => (n.title.toLowerCase().includes(search.toLowerCase())) || (n.note.toLowerCase().includes(search.toLowerCase())))
  }

  return (
    <>
      <div className='app'>
        <TextInput placeholder="Search title or contect" mb="md" value={search}
          onChange={(e) => setSearch(e.target.value)}></TextInput>
        <Modal opened={modalOpen} onClose={() => setModalOpen(false)}>
          {selectedNote && (<Note key={selectedNote.id} id={selectedNote.id} date={selectedNote.date} dateUpdate={selectedNote.dateUpdate} title={selectedNote.title} text={selectedNote.note} openModal={openModal} isEditable={true} updateNote={updateNote} />)}
        </Modal>

        <Form addNotes={addNotes} />
        <NotesGrid deleteNote={deleteNote} openModal={openModal} notes={filterNote()} updateNote={updateNote} isEditable={false} />
      </div>
    </>
  )
}

export default App
