import { useAppStore } from "../store"
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Settings({ className }: { className: string }) {
  const {
    numberOfRows, setNumberOfRows,
    writingSectionsNumber, setWritingSectionsNumber,
    year, setYear,
    month, setMonth,
    headlineEnabled, setHeadlineEnabled
  } = useAppStore();

  return (
    <div className={`bg-slate-100 rounded-md p-8 print:hidden ${className}`}>
      <div className="flex items-center mr-8 mb-8">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-4">
          Add headline
        </label>
        <div>
          <input
            type="checkbox"
            value="1"
            checked={headlineEnabled}
            onChange={(e) => setHeadlineEnabled(e.target.checked)} />
        </div>
      </div>

      <div className="md:flex items-center mb-8">
        <div className="flex items-center mb-6 md:mb-0 md:mr-6">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-4">
            Year
          </label>
          <div className="">
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value, 10))}
              className="block px-4 w-24 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex items-center">
          <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900 mr-4">
            Month
          </label>
          <div className="relative">
            <select
              id="location"
              name="location"
              className="block rounded-md border-0 py-2.5 pl-2.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
              onChange={(e) => setMonth(parseInt(e.target.value))}
              defaultValue={month}
            >
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
            <ChevronDownIcon
              className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-2"/>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-4">
          Number of habits
        </label>
        <div className="">
          <input
            type="text"
            value={numberOfRows}
            onChange={(e) => setNumberOfRows(e.target.value)}
            className="block px-4 w-24 rounded-md border-0 py-2.5 text-gray-900 text-left shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="flex items-center">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mr-4">
          Number of vertical sections
        </label>
        <div className="">
          <input
            type="text"
            value={writingSectionsNumber}
            onChange={(e) => setWritingSectionsNumber(e.target.value)}
            className="block px-4 w-24 rounded-md border-0 py-2.5 text-gray-900 text-left shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  )
}

export default Settings
