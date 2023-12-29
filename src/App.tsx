import HabitTracker from "./components/HabitTracker"
import { useAppStore } from "./store"

function App() {
  const { numberOfRows, setNumberOfRows, writingSectionsEnabled, setWritingSectionsEnabled } = useAppStore();

  return (
    <div className="screen:container p-8 print:p-0">
      <div className="mb-8 bg-slate-100 p-8 print:hidden">
        <input
          type="number"
          defaultValue={numberOfRows}
          onChange={(e) => setNumberOfRows(e.target.value)} />

        <input
          type="checkbox"
          value="1"
          checked={writingSectionsEnabled}
          onChange={(e) => setWritingSectionsEnabled(e.target.checked)} />
      </div>

      <HabitTracker />
    </div>
  )
}

export default App
