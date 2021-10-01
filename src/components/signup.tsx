import { useState, useRef, createRef, ChangeEvent } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import Button from '@mui/material/Button'

const Section = styled.section`
  padding: 50px 20px 30px;
  width: min(96%, 550px);
  button.register {
    margin-top: 40px;
    margin-left: auto;
  }
`

const UL = styled.section`
  display: grid;
  row-gap: 20px;
  li {
    display: flex;
    align-items: center;
  }
  p {
    margin-right: 40px;
    line-height: 1.4;
  }
  div.MuiTextField-root {
    width: 100%;
  }
`

export const validPassword = (password: string) => {
  const result = /^(?=.*[A-Z])(?=.*[#%.?/-])[a-zA-Z0-9.?/-]{8,24}$/.test(
    password
  )
  return result
}

const Signup: FC = () => {
  const [value, setValue] = useState<Date | null>(null)
  const [canRegister, setCanRegister] = useState(false)
  const forms = useRef(
    [...Array(4).keys()].map(() => createRef<HTMLInputElement>())
  )

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(forms.current[0].current)
    console.log(forms.current[1].current)
    console.log(forms.current[2].current?.value)
    console.log(forms.current[3].current?.value)
  }

  const validName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value?.length > 1) {
      setCanRegister(true)
    } else {
      setCanRegister(false)
    }
  }

  return (
    <Section>
      <UL>
        <li>
          <p>username</p>
          <TextField
            size="small"
            inputRef={forms.current[0]}
            onChange={validName}
          />
        </li>
        <li>
          <p>password</p>
          <TextField size="small" type="password" inputRef={forms.current[1]} />
        </li>
        <li>
          <p>
            repeat
            <br />
            password
          </p>
          <TextField size="small" type="password" inputRef={forms.current[2]} />
        </li>
        <li>
          <p>birthdate</p>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={(params) => (
                <TextField {...params} inputRef={forms.current[3]} />
              )}
            />
          </LocalizationProvider>
        </li>
      </UL>
      <Button
        className="register"
        variant="contained"
        onClick={handleSubmit}
        disabled={!canRegister}
      >
        Register
      </Button>
    </Section>
  )
}

export default Signup
