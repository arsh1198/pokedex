import useStore from "../Store";

const LIGHT = {
  background: "#fff",
  card: "#e5e5e5",
  header: "#a9e4ff",
  text: "#222222",
};

const DARK = {
  background: "#222831",
  card: "#393E46",
  header: "#00ADB5",
  text: "#EEEEEE",
};

export const useTheme = () => {
  const darkMode = useStore((state) => state.darkMode);

  return darkMode ? DARK : LIGHT;
};
