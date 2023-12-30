import HabitTracker from "./components/HabitTracker"
import Settings from "./components/Settings"
import Logo from "./assets/logo.svg?react"

function App() {
  return (
    <div className="screen:container p-8 print:p-0">
      <header className="mb-8">
        <Logo
          className="h-8" />
      </header>

      <Settings className="mb-8" />

      <div className="screen:p-4 screen:border-[1px] border-dashed border-slate-400 rounded-md">
        <HabitTracker />
      </div>
    </div>
  )
}

export default App
