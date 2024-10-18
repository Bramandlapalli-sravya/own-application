import React, { useEffect, useState } from "react";
import { useContext, createContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    return setTheme(!theme);
  };

  const themeValue = theme ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeValue);
  }, [themeValue]);

  return (
    <ThemeContext.Provider value={{ themeValue, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
