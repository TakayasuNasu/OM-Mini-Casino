import { useState } from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSessionStorage } from 'beautiful-react-hooks'
import Modal from 'react-modal'
import Button from '@mui/material/Button'
import CasinoIcon from '@mui/icons-material/Casino'
import Header from '@/components/header'
import Signup from '@/components/signup'

const Section = styled.section`
  min-height: 100vh;
  background-image: linear-gradient(135deg, #70f570 10%, #49c628 100%);
  header.header {
    display: flex;
    a {
      display: block;
      margin-left: auto;
    }
  }
`
const Main = styled.main`
  margin: 0 auto;
  padding-top: 80px;
  width: min(94%, 880px);
  h2.title,
  a.link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 8px 0;
    width: 50%;
    font-size: 24px;
    border: solid #000000 3px;
  }
  a.link {
    margin-top: 100px;
    width: 80%;
    font-size: 18px;
    text-decoration: none;
  }
`
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root')

const Home: FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <Section>
      <Header fn={openModal} />
      <Main>
        <h2 className="title">Welcom Casino!</h2>
        <Link to="/games" className="link">
          <CasinoIcon sx={{ fontSize: 40, color: '#ffffff' }} />
          <Button>Go to Casino</Button>
        </Link>
      </Main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(!modalIsOpen)}
      >
        <Signup />
      </Modal>
    </Section>
  )
}

export default Home
