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
    <div className={`relative bg-slate-100 rounded-md p-8 print:hidden ${className}`}>
      <div className="flex items-center mb-6">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-4">
          Number of rows
        </label>
        <div className="">
          <input
            type="text"
            value={numberOfRows}
            onChange={(e) => handleNumberOfRowsInput(e.target.value)}
            className="block pl-4 w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="flex items-center mr-8">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-4">
          Writing sections
        </label>
        <div>
          <input
            type="checkbox"
            value="1"
            checked={writingSectionsEnabled}
            onChange={(e) => setWritingSectionsEnabled(e.target.checked)} />
        </div>
      </div>

      <button
        onClick={() => { print()} }
        className="absolute right-4 top-4
          rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        PRINT
      </button>
    </div>
  )
}

export default Settings
