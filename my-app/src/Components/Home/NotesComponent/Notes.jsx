import { useEffect, useRef, createRef } from "react";
import { Note } from "./Note.jsx";

export const Notes = ({ notes = [], setNotes = () => {} }) => {
  useEffect(() => {
    // Load notes from localStorage if available
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find(
        (savedNote) => savedNote.id === note.id
      );
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes]);

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  // References to the notes
  const noteRefs = useRef([]);

  // Handle drag start
  const handleDragStart = (note, e) => {
    const { id } = note;
    const noteRef = noteRefs.current[id].current;
    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    // Handle dragging movement
    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      // Update the position in the UI during drag
      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    // Handle drag end
    const handleMouseup = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseup);

      const finalPos = noteRef.getBoundingClientRect();
      const newPosition = { x: finalPos.left, y: finalPos.top };

      // Update the position in notes and save to localStorage
      const updatedNotes = notes.map((n) =>
        n.id === id ? { ...n, position: newPosition } : n
      );

      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseup);
  };

  return (
    <>
      {notes.map((note) => {
        return (
          <Note
            ref={
              noteRefs.current[note.id]
                ? noteRefs.current[note.id]
                : (noteRefs.current[note.id] = createRef())
            }
            key={note.id}
            initialPos={note.position}
            content={note.content}
            onMouseDown={(e) => handleDragStart(note, e)}
          />
        );
      })}
    </>
  );
};
