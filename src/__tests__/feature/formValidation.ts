import { validPassword } from '@/components/signup'

describe('signup', () => {
  describe('validPassword', () => {
    test.each([
      ['123', false],
      ['12a', false],
      ['abcde', false],
      ['12abc', false],
      ['12345', false],
      ['ABCDE', false],
      ['A1234', false],
      ['A123?', true],
      ['A123-', true],
      ['A123@', true],
      ['A1!23', true],
    ])('valid Password', (a, expected) => {
      expect(validPassword(a)).toBe(expected)
    })
  })
})
