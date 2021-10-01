import { imageNum } from '@/pages/game'

describe('game', () => {
  describe('imageNum', () => {
    test.each([
      [1, '1'],
      [2, '2'],
      [3, '3'],
      [4, '0'],
      [5, '1'],
      [6, '2'],
      [7, '3'],
      [8, '0'],
      [9, '1'],
      [10, '2'],
      [11, '3'],
      [12, '0'],
      [13, '1'],
      [14, '2'],
      [15, '3'],
      [16, '0'],
    ])('return image number as string', (a, expected) => {
      expect(imageNum(a)).toBe(expected)
    })
  })
})
