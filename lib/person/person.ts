import firstNames from '../dataset/firstNames.json'
import surnames from '../dataset/surnames'

export interface IPerson {
  firstName(): string
  lastName(): string
  fullName(): string
  age(): number
}

const person = ({ gender = 'female' }: { gender?: 'female' | 'male' } = {}): IPerson => {
  const getRandomFirstName = (): string => {
    const collection: string[] = firstNames[gender]
    const randomAccessor = Math.floor(Math.random() * collection.length)

    return collection[randomAccessor] ?? 'Jane'
  }

  const getRandomSurname = (): string => {
    const randomAccessor = Math.floor(Math.random() * surnames.length)

    return surnames[randomAccessor] ?? 'Doe'
  }

  return {
    firstName: () => getRandomFirstName(),
    lastName: () => getRandomSurname(),
    fullName: () => `${getRandomFirstName()} ${getRandomSurname()}`,
    age: () => Math.floor(Math.random() * 100),
  }
}

export default person
