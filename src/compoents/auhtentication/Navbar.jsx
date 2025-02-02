import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <h2>Auth Example</h2>
      <p>{user ? `Welcome, ${user}!` : "You are not logged in"}</p>
    </nav>
  );
}
