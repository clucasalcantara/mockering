import datatypes from './datatypes'

describe('Datatypes module', () => {
  it('should return a random uuid', () => {
    expect(datatypes.uuid()).toHaveLength(36)
  })
})
