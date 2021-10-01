import type { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Game } from '@/entities/game'

const LI = styled.li`
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 120px;
    text-align: center;
    text-decoration: none;
    border: solid #000000 1.5px;
  }
`

type GameItemProps = { game: Game }

const GameItem: FC<GameItemProps> = ({ game }: GameItemProps) => (
  <LI>
    <Link to={`/games/${game.id}`} className="link">
      <p className="text">{game.name}</p>
    </Link>
  </LI>
)

export default GameItem
