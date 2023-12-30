import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface AppStore {
  numberOfRows: number
  setNumberOfRows: (key: number | string) => void
  writingSectionsEnabled: boolean
  setWritingSectionsEnabled: (key: boolean) => void
  year: number
  setYear: (key: number) => void
  month: number
  setMonth: (key: number) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      numberOfRows: 10,
      setNumberOfRows: (key) => set({ numberOfRows: parseInt(key.toString(), 10) || 10 }),
      writingSectionsEnabled: true,
      setWritingSectionsEnabled: (key) => set({ writingSectionsEnabled: key }),
      year: new Date().getFullYear(),
      setYear: (key) => set({ year: key }),
      month: new Date().getMonth(),
      setMonth: (key) => set({ month: key }),
    }),
    {
      name: "habit-tracker-generator-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
