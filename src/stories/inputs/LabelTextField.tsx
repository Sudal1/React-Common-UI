import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'
import TextField, { type Props as TextFieldProps } from './TextField'

interface Props extends TextFieldProps {
  label: string
  disabled?: boolean
}

const LabelTextField = ({ label, disabled = false, onBlur, onFocus, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event)
    setIsFocused(false)
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event)
    setIsFocused(true)
  }

  return (
    <>
      <StyledLabel isFocused={isFocused} disabled={disabled}>
        {label}
      </StyledLabel>
      <TextField onBlur={handleBlur} onFocus={handleFocus} disabled={disabled} {...rest} />
    </>
  )
}

const StyledLabel = styled.label<{ isFocused?: boolean; disabled?: boolean }>`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.gray3};
  margin: 0 0 1.2rem;
  display: inline-block;
  transition: all 0.3s;

  ${(props) =>
    props.isFocused &&
    css`
      color: ${colors.primary};
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
    `}
`

export default LabelTextField
