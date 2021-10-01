import bet from '@/services/bet'

describe('bet', () => {
  it('is getting 2 times bet or lost bet from total', () => {
    expect([101, 99]).toContain(bet(100, 1))
    expect([103, 97]).toContain(bet(100, 3))
    expect([105, 95]).toContain(bet(100, 5))
    expect([110, 90]).toContain(bet(100, 10))
  })
})
