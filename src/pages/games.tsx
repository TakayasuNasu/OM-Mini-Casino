import { useState, ChangeEvent } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Game } from '@/entities/game'
import GameItem from '@/components/gameItem'
import { gameData } from '@/data/games'

const Section = styled.section`
  margin: 0 auto;
  width: min(94%, 880px);
  .input {
    margin-top: 80px;
    width: 80%;
  }
  .button-block {
    margin-top: 40px;
  }
`

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 40px;
`

const Games: FC = () => {
  const [gameNums, setGameNums] = useState(8)
  const [input, setInput] = useState('')

  const games: Game[] = gameData(gameNums)

  const gameItems = games
    .filter((game: Game) => {
      if (!input) return true
      return game.name == input
    })
    .map((game: Game, i: number) => {
      return <GameItem key={i} game={game} />
    })

  const handleClick = () => {
    setGameNums(16)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <Section>
      <TextField
        className="input"
        label="Search"
        variant="standard"
        onChange={handleChange}
      />
      <UL>{gameItems}</UL>
      <div className="button-block">
        <Button variant="contained" onClick={handleClick}>
          see more
        </Button>
      </div>
    </Section>
  )
}

export default Games
