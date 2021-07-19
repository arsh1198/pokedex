import * as React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useStore from "../../Store";

const ThemeToggle = () => {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  return (
    <DarkModeToggle
      size={60}
      onChange={() => {
        toggleDarkMode();
      }}
      checked={darkMode}
    />
  );
};

export default ThemeToggle;
