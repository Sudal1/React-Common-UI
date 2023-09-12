import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'
import Input, { type Props as InputProps } from './Input'

interface Props extends InputProps {
  label: string
}

const LabelInput = ({ label, onBlur, onFocus, ...rest }: Props) => {
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
      <StyledLabel isFocused={isFocused}>{label}</StyledLabel>
      <Input onBlur={handleBlur} onFocus={handleFocus} {...rest} />
    </>
  )
}

const StyledLabel = styled.label<{ isFocused?: boolean }>`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.gray3};
  margin: 0 0 1.2rem;
  display: inline-block;

  ${(props) =>
    props.isFocused &&
    css`
      color: ${colors.primary};
    `}
`

export default LabelInput
