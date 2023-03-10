import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import './App.css'; 

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString()
    };
  
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  
    console.log('New note added:', newNote);
    console.log('Updated notes:', updatedNotes);
  };
  
  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  
    console.log('Note deleted:', noteId);
    console.log('Updated notes:', updatedNotes);
  };

  const handleSearchNote = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <div className="app">
      <Header />
      <Search handleSearchNote={handleSearchNote} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
};

export default App;
