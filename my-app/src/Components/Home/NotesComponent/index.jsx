import React, { useState } from "react";
import { Notes } from "./Notes.jsx";

export const NotesComponent = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "This is a 1st note",
    },
    {
      id: 2,
      content: "This is a 2nd note",
    },
    {
      id: 3,
      content: "This is a 3rd note",
    },
  ]);

  return (
      <Notes key={notes.id} notes={notes} setNotes={setNotes} />
  );
};
