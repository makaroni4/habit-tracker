import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface AppStore {
  numberOfRows: number
  setNumberOfRows: (key: number | string) => void
  writingSectionsNumber: number
  setWritingSectionsNumber: (key: number | string) => void
  year: number
  setYear: (key: number) => void
  month: number
  setMonth: (key: number) => void
  headlineEnabled: boolean
  setHeadlineEnabled: (key: boolean) => void
}

const extractNumericValue = (input: number | string, defaultValue: number = 0): number => {
  let num = parseInt(input.toString(), 10)

  if (isNaN(num)) {
    num = defaultValue
  }

  return num
}

export const useAppStore = create<AppStore>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      numberOfRows: 10,
      setNumberOfRows: (key) => set({ numberOfRows: extractNumericValue(key) }),
      writingSectionsNumber: 2,
      setWritingSectionsNumber: (key) => set({ writingSectionsNumber: extractNumericValue(key) }),
      year: new Date().getFullYear(),
      setYear: (key) => set({ year: key }),
      month: new Date().getMonth(),
      setMonth: (key) => set({ month: key }),
      headlineEnabled: true,
      setHeadlineEnabled: (key) => set({ headlineEnabled: key })
    }),
    {
      name: "habit-tracker-generator-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
