import { generateDateBetween, generateFutureDate, generatePastDate } from './processors'

export interface IDate {
  past(): Date
  future(): Date
  between(from: Date, to: Date): Date
}

const date: IDate = {
  past: () => generatePastDate(),
  future: () => generateFutureDate(),
  between: (from, to) => generateDateBetween(from, to),
}

export default date
