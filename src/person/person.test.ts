import person from './person'

jest.mock('../dataset/firstNames.json', () => {
  return {
    female: ['Jane'],
    male: ['John'],
  }
})

jest.mock('../dataset/surnames', () => {
  return ['Barrey']
})

describe('person module', () => {
  it('should return a first name defaulting to female gender', () => {
    expect(person().firstName()).toEqual('Jane')
  })

  it('should return a first name using the specified gender', () => {
    expect(person({ gender: 'male' }).firstName()).toEqual('John')
  })

  it('should return a female fullname', () => {
    expect(person().fullName()).toEqual('Jane Barrey')
  })

  it('should return a male fullname', () => {
    expect(person({ gender: 'male' }).fullName()).toEqual('John Barrey')
  })

  it('should return an age between 0-100', () => {
    expect(person().age()).toBeLessThanOrEqual(100)
  })
})
