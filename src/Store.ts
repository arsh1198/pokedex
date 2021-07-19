import create, { GetState, SetState } from "zustand";

export type Filter = "type" | "generation" | null;

interface Store {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDarkMode: boolean) => void;
}

const useStore = create<Store>(
  (set: SetState<Store>, get: GetState<Store>): Store => ({
    filter: null,
    setFilter: (filter: Filter) => set({ filter }),
    darkMode: false,
    toggleDarkMode: () => {
      const { darkMode: isDarkMode } = get();
      localStorage.setItem("darkMode", isDarkMode ? "0" : "1");
      set({ darkMode: !isDarkMode });
    },
    setDarkMode: (isDarkMode: boolean) => {
      set({ darkMode: isDarkMode });
    }
  })
);

export default useStore;
