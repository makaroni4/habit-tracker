import HabitTracker from "./components/HabitTracker"
import Settings from "./components/Settings"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="screen:container p-8 print:p-0">
      <Navbar className="mb-8" />

      <Settings className="mb-8" />

      <div className="screen:p-4 screen:border-[1px] border-dashed border-slate-400 rounded-md">
        <HabitTracker />
      </div>
    </div>
  )
}

export default App
