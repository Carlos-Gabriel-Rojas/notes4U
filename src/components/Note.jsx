import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ note, handleDeleteNote }) => {
  const { id, text, date } = note;

  const handleDeleteClick = () => {
    handleDeleteNote(id);
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={handleDeleteClick}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;