import create from "zustand";

const useStore = create((set) => ({
    filterBy : '',
    setFilter : (filterBy: string) => {
        set((state) => ({filterBy}))
    },
    type : '',
    setType : (type: string) => {
        set((state) => ({type}))
    }
}))

export default useStore