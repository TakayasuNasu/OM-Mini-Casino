const bet = (total: number, bet: number): number => {
  if (Math.random() < 0.5) {
    return total - bet
  }
  return total + bet
}
export default bet
