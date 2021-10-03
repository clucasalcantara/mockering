import language from './language'

jest.mock('../dataset/words', () => {
  return ['test']
})

describe('Language module', () => {
  it('should return a random word', () => {
    expect(language.words()).toEqual('test')
  })

  it('should return a random paragraph', () => {
    expect(language.paragraph()).toEqual('Test, test, test, test, test.')
  })

  it('should return a random title', () => {
    expect(language.title()).toEqual('Test')
  })
})
