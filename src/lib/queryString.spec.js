const { queryString } = require('./queryString')

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Leonardo',
      profession: 'developer'
    }

    expect(queryString(obj)).toBe('name=Leonardo&profession=developer')
  });

  it('should create a valid query string when an array is passed as value', () => {
    const obj = {
      name: 'Leonardo',
      abilities: ['JS', 'TDD']
    }

    expect(queryString(obj)).toBe('name=Leonardo&abilities=JS,TDD')
    // expect(queryString(obj)).not.toBe('name=Leonardo&abilities=JS,TDD') //testar falso positivo
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Leonardo',
      abilities: { first: 'JS', second: 'TDD' }
    }

    expect(() => {
      queryString(obj)
    }).toThrowError();
  })

})

