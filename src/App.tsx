import HabitTracker from "./components/HabitTracker"
import { useAppStore } from "./store"

function App() {
  const { setNumberOfRows } = useAppStore();

  return (
    <div className="screen:container p-8 print:p-0">
      <div className="mb-8 bg-slate-100 p-8 print:hidden">
        <input
          type="number"
          onChange={(e) => setNumberOfRows(e.target.value)} />
      </div>

      <HabitTracker />
    </div>
  )
}

export default App
