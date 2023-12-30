import HabitTracker from "./components/HabitTracker"
import Settings from "./components/Settings"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="screen:container p-8 print:p-0">
      <Navbar className="screen:mb-16" />

      <h2 className="text-2xl mb-4 print:hidden">1️⃣ Configure your Habit Tracker</h2>

      <Settings className="screen:mb-16" />

      <h2 className="text-2xl mb-4 print:hidden">2️⃣ Take a look at the preview</h2>

      <div className="screen:mb-16 screen:p-4 screen:border-[1px] border-dashed border-slate-400 rounded-md">
        <HabitTracker />
      </div>

      <h2 className="text-2xl screen:mb-4 print:hidden">3️⃣ Print or save as PDF</h2>

      <button
        onClick={() => { print()} }
        className="rounded-full bg-indigo-600 px-12 py-4 text-lg font-semibold text-white shadow-sm tracking-wider hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-6500 print:hidden">
        PRINT
      </button>

      <Footer
        className="print:hidden mt-24" />
    </div>
  )
}

export default App
