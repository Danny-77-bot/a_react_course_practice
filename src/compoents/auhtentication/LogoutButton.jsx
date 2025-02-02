import { useAuth } from "../../context/AuthContext";

export default function LogoutButton() {
  const { logout, user } = useAuth();

  return (
    user && (
      <button
        onClick={logout}
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        Log Out
      </button>
    )
  );
}
