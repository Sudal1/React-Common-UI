import React from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Checkbox = ({ label, ...rest }: Props) => {
  return (
    <Container>
      <StyledCheckbox type="checkbox" {...rest} />
      <StyledLabel>{label}</StyledLabel>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyledCheckbox = styled.input`
  appearance: none;
  margin: 0 1.2rem 0 0;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid ${colors.gray1};
  border-radius: 0.4rem;
  position: relative;
  top: 0.1rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${colors.primary};
  }
`

const StyledLabel = styled.label`
  font-size: 1.4rem;
  color: ${colors.gray4};
`

export default Checkbox
