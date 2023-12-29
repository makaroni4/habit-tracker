import { useAppStore } from "../store"

function Settings({ className }: { className: string }) {
  const { numberOfRows, setNumberOfRows, writingSectionsEnabled, setWritingSectionsEnabled } = useAppStore();

  const handleNumberOfRowsInput = (newNumberOfRows: string) => {
    console.log(newNumberOfRows)
    if (newNumberOfRows.match(/^\d+$/)) {
      setNumberOfRows(newNumberOfRows)
    } else {
      setNumberOfRows(10)
    }
  }

  return (
    <div className={`mb-8 bg-slate-100 p-8 print:hidden ${className}`}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Number of rows
        </label>
        <div className="mt-2">
          <input
            type="text"
            value={numberOfRows}
            onChange={(e) => handleNumberOfRowsInput(e.target.value)}
            className="block pl-4 w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <input
        type="checkbox"
        value="1"
        checked={writingSectionsEnabled}
        onChange={(e) => setWritingSectionsEnabled(e.target.checked)} />
    </div>
  )
}

export default Settings
