export const generatePastDate = (refDate?: string) => {
  let date = new Date()
  if (typeof refDate !== 'undefined') {
    date = new Date(Date.parse(refDate))
  }

  const changerFactor = Math.floor(Math.random() * 365 * 24 * 3600 * 1000)

  let timeDifference = date.getTime() - changerFactor
  date.setTime(timeDifference)

  return date
}

export const generateFutureDate = (refDate?: string) => {
  let date = new Date()
  if (typeof refDate !== 'undefined') {
    date = new Date(Date.parse(refDate))
  }

  const changerFactor = Math.floor(Math.random() * 365 * 24 * 3600 * 1000)

  let timeDifference = date.getTime() + changerFactor
  date.setTime(timeDifference)

  return date
}

export const generateDateBetween = (from: Date, to: Date) => {
  const fromTime = from.getTime()
  const toTime = to.getTime()

  return new Date(fromTime + Math.random() * (toTime - fromTime))
}
