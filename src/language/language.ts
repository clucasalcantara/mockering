import words from '../dataset/words'

export interface ILanguage {
  words(): string
  paragraph(): string
  title(): string
}

export type ParagraphConfigType = {
  lines?: number
  wordCount?: number
}

export type WordsConfigType = {
  count?: number
}

const DEFAULT_PARAGRAPH_LENGTH = 5
const DEFAULT_SENTENCE_WORDS_COUNT = 50
const DEFAULT_WORDS_COUNT = 1

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const language = (): ILanguage => {
  const generateWords = ({ count = DEFAULT_WORDS_COUNT }: WordsConfigType = {}) => {
    const word = []

    for (let i = 0; i < count; i++) {
      word.push(words[Math.floor(Math.random() * words.length)])
    }

    return word.join('')
  }

  const generateSentences = ({
    lines = DEFAULT_PARAGRAPH_LENGTH,
    wordCount = DEFAULT_SENTENCE_WORDS_COUNT,
  }: ParagraphConfigType = {}) => {
    let paragraph: string[] = []

    for (let i = 0; i < lines; i++) {
      const sentence: string[] = []

      for (let i = 0; i < wordCount; i++) {
        const randomAccessor = Math.floor(Math.random() * words.length)
        !sentence.includes(words[randomAccessor] as string) && sentence.push(words[randomAccessor] as string)
      }

      paragraph.push(sentence.join(' '))
    }

    return capitalizeFirstLetter(`${paragraph.join(', ')}.`)
  }

  const generateTitle = ({
    lines = DEFAULT_PARAGRAPH_LENGTH,
    wordCount = DEFAULT_SENTENCE_WORDS_COUNT,
  }: ParagraphConfigType = {}) => {
    const title = generateSentences({ lines, wordCount })
    return title.substring(0, title.length - 1)
  }

  return {
    words: ({ count = DEFAULT_WORDS_COUNT }: WordsConfigType = {}) => generateWords({ count }),
    paragraph: ({ lines = DEFAULT_PARAGRAPH_LENGTH }: ParagraphConfigType = {}) => generateSentences({ lines }),
    title: () => generateTitle({ lines: 1, wordCount: 5 }),
  }
}

export default language
