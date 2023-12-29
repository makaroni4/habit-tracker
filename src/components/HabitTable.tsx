import { useAppStore } from "../store"

function HabitTable() {
  const numDays = (y: number, m: number) => new Date(y, m, 0).getDate()

  const currentDate = new Date()
  const numberOfDays = numDays(currentDate.getFullYear(), currentDate.getMonth() + 1)

  const { numberOfRows } = useAppStore()

  return (
    <>
      <div>
        <table className='habit-table'>
          <thead>
            <tr>
              <th><span className="text-[12px] text-slate-300">MONTH</span></th>
              { [...Array(numberOfDays)].map((_, i) => {
                return (
                  <th>
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
                  <td></td>
                  { [...Array(numberOfDays)].map(() => {
                    return (
                      <td>
                      </td>
                    )
                  }) }
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default HabitTable
