import HabitTracker from "./components/HabitTracker"
import Settings from "./components/Settings"

function App() {
  return (
    <div className="screen:container p-8 print:p-0">
      <Settings />

      <HabitTracker />
    </div>
  )
}

export default App
