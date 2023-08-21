import React from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/Colors'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}

const Input = ({ errorMessage, ...rest }: Props) => {
  return (
    <>
      <StyledInput {...rest} />
      {errorMessage && <Message>{errorMessage}</Message>}
    </>
  )
}

const StyledInput = styled.input`
  width:100%;
  border:1px solid ${colors.gray2};
  border-radius:0.4rem;
  font-size:1.4rem;
  padding: 0.4rem; 1.6rem;
  color: ${colors.gray5};
  transition: all 0.5s ease;

  &:focus {
    border: 1px solid ${colors.primary};
  }
  &::placeholder {
    color: ${colors.gray2};
  }
  &:disabled {
    background: ${colors.gray0};
    color: ${colors.gray3};
  }
`

const Message = styled.p`
  margin: 1.2rem 0 0;
  font-size: 1.4rem;
  color: ${colors.error};
`

export default Input
