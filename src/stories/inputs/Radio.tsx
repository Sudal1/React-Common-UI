import { useContext } from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'
import RadioContext from 'context/radioGroup'

interface Props {
  value: string | number
  checked?: boolean
  disabled?: boolean
  required?: boolean
  children: React.ReactNode
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

const Radio = ({
  value,
  checked = false,
  disabled = false,
  required = false,
  children,
  onChange,
}: Props) => {
  const context = useContext(RadioContext)

  if (context === null) {
    return (
      <StyledLabel aria-disabled={disabled}>
        <StyledRadio
          type="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          required={required}
          onChange={onChange}
        />
        {children}
      </StyledLabel>
    )
  }

  const { isChecked, isDisabled, handleChange } = context

  return (
    <StyledLabel aria-disabled={disabled}>
      <StyledRadio
        type="radio"
        value={value}
        checked={isChecked(value)}
        disabled={isDisabled(disabled)}
        required={required}
        onChange={() => handleChange(value)}
      />
      {children}
    </StyledLabel>
  )
}

const StyledRadio = styled.input`
  appearance: none;
  margin: 0 1.2rem 0 0;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid ${colors.gray1};
  border-radius: 50%;
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
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${colors.gray4};
`

export default Radio
