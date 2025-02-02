import { createContext, useContext, useState } from "react";

// 1. Create the AuthContext
const AuthContext = createContext();

// 2. Create the Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to log in a user
  const login = (username) => {
    setUser(username);
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook for easier access
export function useAuth() {
  return useContext(AuthContext);
}
