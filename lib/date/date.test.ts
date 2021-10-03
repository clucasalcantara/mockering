import date from './date'

describe('Date module', () => {
  const today = new Date()
  it('should return a past date', () => {
    expect(date.past().getTime()).toBeLessThan(today.getTime())
  })

  it('should return a future date', () => {
    expect(date.future().getTime()).toBeGreaterThan(today.getTime())
  })

  it('should return a date between a range', () => {
    const from = new Date('2021/02/12')
    const to = new Date('2021/03/12')

    const between = date.between(from, to).getTime()

    expect(between).toBeGreaterThan(from.getTime())
    expect(between).toBeLessThan(to.getTime())
  })
})
