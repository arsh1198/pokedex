import create from "zustand";

const useStore = create((set) => ({
    filterBy : '',
    setFilter : (filterBy: string) => {
        set((state) => ({filterBy}))
    }
}))

export default useStore