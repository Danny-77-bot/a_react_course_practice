import { useAuth } from "../../context/AuthContext";

export default function LoginButton() {
  const { login } = useAuth();

  return (
    <button
      onClick={() => login("Daniel")}
      style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
    >
      Log In
    </button>
  );
}
