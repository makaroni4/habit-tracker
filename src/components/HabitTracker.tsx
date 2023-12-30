import HabitTable from "./HabitTable"
import { useAppStore } from "../store"

function HabitTracker() {
  const { headlineEnabled, writingSectionsNumber } = useAppStore()

  return (
    <div className="print:absolute top-0 left-0 screen:h-[700px] print:h-screen overflow-hidden">
      { headlineEnabled && (
        <div className={`w-full h-16 mb-6 bg-slate-100`}></div>
      )}

      <div className="mb-6">
        <HabitTable />
      </div>

      { writingSectionsNumber > 0 && (
        <div
          className={`grid grid-cols-${writingSectionsNumber} gap-6 w-full h-full`}>
          { [...Array(writingSectionsNumber)].map(() => {
            return (
              <div className={`w-full h-full bg-slate-100`}></div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HabitTracker
