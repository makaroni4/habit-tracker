import HabitTracker from "./components/HabitTracker"
import Settings from "./components/Settings"

function App() {
  return (
    <div className="screen:container p-8 print:p-0">
      <Settings className="mb-8" />

      <div className="screen:p-4 screen:border-[1px] border-dashed border-indigo-500 rounded-md">
        <HabitTracker />
      </div>
    </div>
  )
}

export default App
