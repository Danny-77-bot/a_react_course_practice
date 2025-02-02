import { createContext, useContext, useState } from "react";

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create a Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for easier access to ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}
