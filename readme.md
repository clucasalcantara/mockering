# Mockering

_NOTE_ This is a work in progress 🚧

A lightweight fake data generator for testing and dev purposes

## Why?

Generate test data shouldn't be painful

## API 🚧

- Person
- Language
- Date
- Datatypes

### Person

- Name

```typescript
// The person module defaults to the female gender but you can override it passing it over person
// configuration
const firstName = person().firstName() // i.e Jane
const lastName = person().firstName() // i.e Doe
const fullName = person().firstName() // i.e Jane Doe

// Overriding the person config
const maleName = person({ gender: 'male' }).firstName() // i.e John
```

- Age

```typescript
// Generates a random age between 0-100
const firstName = person().age() // i.e 37
```

### Language

- Word

```typescript
// Accepts a word count override
const randomWord = language.word() // i.e Book
```

- Paragraph

```typescript
// Accepts a count override
const pargraph = language.paragraph()
// i.e The book is on the table, Lorem ipsum dolor amet in, the book is on the table, Lorem ipsum dolor amet in.
```

- Title

```typescript
// Accepts a word count override to configure the title length
const pargraph = language.title() // i.e The book is on the table
```
