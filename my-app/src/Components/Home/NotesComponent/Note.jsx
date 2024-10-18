import { forwardRef } from "react";

export const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  console.log(initialPos, "initialPos");
  return (
    <div
      ref={ref}
      className="p-2 my-2 border border-gray-300 rounded-md shadow-sm text-black"
      style={{
        position: "absolute",
        left: initialPos?.x,
        right: initialPos?.y,
        userSelect: "none",
        padding: "10px",
        width: 200,
        cursor: "move",
        backgroundColor: "#e2e20f",
      }}
      {...props}
    >
      {content}
    </div>
  );
});
