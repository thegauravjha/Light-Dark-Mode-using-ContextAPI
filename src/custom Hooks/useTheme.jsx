import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleTheme() {
    setIsDarkMode((prevTheme) => !prevTheme);
  }

  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
