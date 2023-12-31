import countDaysInMonth from "./count-days-in-month"

describe("countDaysInMonth", () => {
  test("correctly counts days for 31-day months", () => {
    expect(countDaysInMonth(2023, 0)).toBe(31)
    expect(countDaysInMonth(2023, 2)).toBe(31)
    expect(countDaysInMonth(2023, 4)).toBe(31)
    expect(countDaysInMonth(2023, 6)).toBe(31)
    expect(countDaysInMonth(2023, 7)).toBe(31)
    expect(countDaysInMonth(2023, 9)).toBe(31)
    expect(countDaysInMonth(2023, 11)).toBe(31)
  })

  test("correctly counts days for 30-day months", () => {
    expect(countDaysInMonth(2023, 3)).toBe(30)
    expect(countDaysInMonth(2023, 5)).toBe(30)
    expect(countDaysInMonth(2023, 8)).toBe(30)
    expect(countDaysInMonth(2023, 10)).toBe(30)
  })

  test("correctly counts days for 28-day February", () => {
    expect(countDaysInMonth(2023, 1)).toBe(28)
  })

  test("correctly counts days for 29-day February", () => {
    expect(countDaysInMonth(2024, 1)).toBe(29)
  })
})
