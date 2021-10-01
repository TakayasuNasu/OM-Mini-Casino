import { Game } from '@/entities/game'

export const gameData = (num: number): Game[] => {
  return [...Array(num).keys()].map((i) => {
    return {
      id: i + 1,
      name: `Game ${String.fromCharCode(i + 65)}`,
      description: `Description Game ${String.fromCharCode(i + 65)}`,
      bets: [(i + 1) * 1, (i + 1) * 3, (i + 1) * 5, (i + 1) * 10],
    }
  })
}
