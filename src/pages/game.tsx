import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useSessionStorage } from 'beautiful-react-hooks'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { gameData } from '@/data/games'
import { Game as GameType } from '@/entities/game'
import bet from '@/services/bet'

const Section = styled.section`
  margin: 80px auto 0;
  padding: 20px;
  width: min(94%, 880px);
  border: solid #000000 1.5px;
  h2.title {
    text-align: center;
  }
  figure.img {
    margin-top: 20px;
    text-align: center;
  }
  div.bet {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  ul.ul {
    display: flex;
    margin-left: auto;
    li {
      padding: 0 12px;
    }
  }
`

export const imageNum = (id: number): string => {
  const result = id % 4
  return result.toString()
}

const Game: FC = () => {
  let { id } = useParams<{ id: string }>()
  const [total, setTotal] = useSessionStorage<number>('casino-money', 100)

  const game: GameType = gameData(16).filter((game: GameType) => {
    return game.id == Number.parseInt(id)
  })[0]

  const handleClick = (e: any, money: number) => {
    if (total < money) {
      alert('Oops, Could not bet...')
      return
    }
    setTotal(bet(total, money))
  }

  const bets: JSX.Element[] = game.bets?.map((bet: number) => {
    return (
      <li key={bet}>
        <Button
          variant="contained"
          size="large"
          onClick={(e) => handleClick(e, bet)}
        >
          ${bet}
        </Button>
      </li>
    )
  })

  return (
    <Section>
      <h2 className="title">
        {game.name} {game.description}
      </h2>
      <figure className="img">
        <img src={`/img/casino${imageNum(game.id)}.jpg`} />
      </figure>
      <div className="bet">
        <p>Balance: ${total}</p>
        <ul className="ul">{bets}</ul>
      </div>
    </Section>
  )
}

export default Game
