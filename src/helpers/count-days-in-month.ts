export default (year: number, monthIndex: number) => new Date(year, monthIndex + 1, 0).getDate()
