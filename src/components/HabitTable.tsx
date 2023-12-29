import { useAppStore } from "../store"

function HabitTable() {
  const numDays = (y: number, m: number) => new Date(y, m, 0).getDate()

  const currentDate = new Date()
  const numberOfDays = numDays(currentDate.getFullYear(), currentDate.getMonth() + 1)

  const { numberOfRows } = useAppStore()

  return (
    <div>
      <table className='habit-table table-auto'>
        <thead>
          <tr>
            <th
              className="w-full h-7 pl-4 text-left">
              <span className="text-[10px] text-slate-300">MONTH</span>
            </th>
            { [...Array(numberOfDays)].map((_, i) => {
              return (
                <th className="h-7 w-7 min-w-7">
                  {i + 1}
                </th>
              )
            }) }
          </tr>
        </thead>
        <tbody>
          { [...Array(numberOfRows)].map(() => {
            return (
              <tr>
                <td className="w-7 h-7"></td>
                { [...Array(numberOfDays)].map(() => {
                  return (
                    <td className="w-7 h-7">
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
