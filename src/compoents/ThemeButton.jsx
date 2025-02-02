import { useTheme } from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
