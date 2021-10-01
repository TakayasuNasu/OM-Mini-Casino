import type { FC } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'

const HeaderStyle = styled.header`
  padding: 4px 20px;
  .button {
    display: block;
    margin-left: auto;
  }
`

const Header: FC<{ fn: () => void }> = ({ fn }) => {
  return (
    <HeaderStyle>
      <Button className="button" onClick={fn}>
        links to signup/login
      </Button>
    </HeaderStyle>
  )
}

export default Header
