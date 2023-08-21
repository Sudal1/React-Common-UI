import styled from '@emotion/styled'
import { colors } from 'lib/colors'
import Input, { type Props as InputProps } from './Input'

interface Props extends InputProps {
  label: string
}

const LabelInput = ({ label, errorMessage, ...rest }: Props) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <Input errorMessage={errorMessage} {...rest} />
    </>
  )
}

const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.primary};
  margin: 0 0 1.2rem;
  display: inline-block;
`

export default LabelInput
