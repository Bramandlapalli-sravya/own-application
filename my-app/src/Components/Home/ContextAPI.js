import React, { createContext, useContext, useState } from "react";

const MYAPI = createContext();

export const API = () => {
  return useContext(MYAPI);
};

export const ContextAPI = ({ children }) => {
  const [color, setColor] = useState(false);
  let colorValue = color ? "dark" : "light";

  let ChangeColor = () => {
    setColor(!color);
  };

  return (
    <MYAPI.Provider value={{ colorValue, ChangeColor }}>
      {children}
    </MYAPI.Provider>
  );
};
