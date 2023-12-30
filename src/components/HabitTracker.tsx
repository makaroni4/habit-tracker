import HabitTable from "./HabitTable"
import GoalsSection from "./GoalsSection"
import NotesSection from "./NotesSection"
import { useAppStore } from "../store"

function HabitTracker() {
  const { writingSectionsEnabled } = useAppStore()

  return (
    <div className="print:absolute top-0 left-0 screen:h-[700px] print:h-screen overflow-hidden">
      <div className="mb-6">
        <HabitTable />
      </div>

      { writingSectionsEnabled && (
        <div
          className="grid grid-cols-2 gap-6 w-full h-full">
          <GoalsSection className="w-full h-full" />
          <NotesSection className="w-full h-full" />
        </div>
      )}
    </div>
  )
}

export default HabitTracker
