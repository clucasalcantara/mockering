export interface IDataTypes {
  uuid(): string
}

const generateUuid = (): string => {
  const getGroupLength = (index: number) => {
    if (index === 0) return 8
    if (index === 4) return 12

    return 4
  }

  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

  const uuid: string[] = []

  for (let i = 0; i < 5; i++) {
    const length = getGroupLength(i)
    const word = []
    for (var j = 0; j < length; j++) {
      word.push(characters.charAt(Math.floor(Math.random() * characters.length)))
    }
    uuid.push(word.join(''))
  }

  return uuid.join('-')
}

const datatypes: IDataTypes = {
  uuid: () => generateUuid(),
}

export default datatypes
