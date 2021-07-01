import create from "zustand";

const useStore = create((set) => ({
  filterBy: "",
  setFilter: (filterBy: string) => {
    set((state) => ({ filterBy }));
  },
  type: "",
  setType: (type: string) => {
    set((state) => ({ type }));
  },
  gen: 1,
  setGen: (gen: string) => {
    set((state) => ({ gen }));
  },
}));

export default useStore;
