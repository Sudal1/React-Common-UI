import React from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  type?: 'text' | 'date' | 'email' | 'number' | 'password' | 'url'
}

const TextField = ({ type = 'text', errorMessage, ...rest }: Props) => {
  return (
    <>
      <StyledInput type={type} {...rest} />
      {errorMessage && <Message>{errorMessage}</Message>}
    </>
  )
}

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${colors.gray2};
  border-radius: 0.4rem;
  padding: 1.2rem;
  outline: none;
  font-size: 1.4rem;
  color: ${colors.gray5};
  transition: all 0.5s;

  &:focus {
    border: 1px solid ${colors.primary};
  }
  &::placeholder {
    color: ${colors.gray2};
  }
  &:disabled {
    opacity: 0.4;
  }
`

const Message = styled.p`
  margin: 1.2rem 0 0;
  font-size: 1.4rem;
  color: ${colors.error};
`

export default TextField
