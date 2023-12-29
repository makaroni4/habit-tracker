import HabitTable from "./HabitTable"
import GoalsSection from "./GoalsSection"
import NotesSection from "./NotesSection"
import { useAppStore } from "../store"

function HabitTracker() {
  const { writingSectionsEnabled } = useAppStore()

  return (
    <div className="print:absolute top-0 left-0 h-screen max-h-screen print:overflow-hidden">
      <div className="mb-6">
        <HabitTable />
      </div>

      { writingSectionsEnabled && (
        <div
          className="grid grid-cols-2 gap-6 w-full h-full grid-flow-col	">
          <GoalsSection className="w-full screen:max-h-72" />
          <NotesSection className="w-full screen:max-h-72" />
        </div>
      )}
    </div>
  )
}

export default HabitTracker
