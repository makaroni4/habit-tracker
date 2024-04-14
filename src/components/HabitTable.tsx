import { useAppStore } from "../store"
import countDaysInMonth from "../helpers/count-days-in-month";

function HabitTable() {
  const { year, month, numberOfRows } = useAppStore()

  const weekday = ["S","M","T","W","T","F","S"];

  const numberOfDays = countDaysInMonth(year, month)

  const getMonthLabel = (year: number, monthNumber: number) => {
    const date = new Date(2024, monthNumber);
    const monthName = date.toLocaleString("en-US", { month: "short" });

    return `${monthName} ${year}`.toUpperCase()
  }

  const getDayOfWeekLetter = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day)

    return weekday[date.getDay()]
  }

  return (
    <div>
      <table className='habit-table table-fixed border-collapse'>
        <thead>
          <tr>
            <th
              className="w-full h-7 pl-4 text-left">
              <span className="text-[12px] text-slate-400">{ getMonthLabel(year, month) }</span>
            </th>
            { [...Array(numberOfDays)].map((_, i) => {
              return (
                <th
                  key={i}
                  className="h-7 w-7 min-w-7">
                  <div>
                    {i + 1}
                  </div>
                  <div>
                    {getDayOfWeekLetter(year, month, i + 1)}
                  </div>
                </th>
              )
            }) }
          </tr>
        </thead>
        <tbody>
          { [...Array(numberOfRows)].map((_, i) => {
            return (
              <tr key={i}>
                <td className="w-7 h-7"></td>
                { [...Array(numberOfDays)].map((_, i) => {
                  return (
                    <td key={i} className="w-7 h-7">
                    </td>
                  )
                }) }
              </tr>
            )
          }) }
        </tbody>
      </table>
    </div>
  )
}

export default HabitTable
