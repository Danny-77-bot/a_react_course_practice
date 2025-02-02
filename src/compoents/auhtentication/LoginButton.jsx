import { useState } from "react";
import { useAuth } from "../../context/AuthContext";


export default function LoginButton() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={() => login(username)}
        disabled={!username.trim()}
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        Log In
      </button>
    </div>
  );
}
