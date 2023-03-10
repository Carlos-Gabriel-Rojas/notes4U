import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div>
      <div className="add-note-container">
        <AddNote handleAddNote={handleAddNote} />
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
