import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface AppStore {
  numberOfRows: number
}

export const useAppStore = create<AppStore>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      numberOfRows: 10,
      setNumberOfRows: (key: number | string) => set({ numberOfRows: parseInt(key.toString(), 10) || 10 })
    }),
    {
      name: "habit-tracker-generator-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)
