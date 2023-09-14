import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import RadioContext from 'context/radioGroup'

interface Props {
  selectedValue?: string | number
  groupDisabled?: boolean
  children: ReactNode
  onChange(value: string | number): void
}

const RadioGroup = ({ selectedValue, groupDisabled = false, children, onChange }: Props) => {
  const isChecked = (value: string | number) =>
    selectedValue !== undefined ? value === selectedValue : false

  const isDisabled = (disabled?: boolean) => disabled || groupDisabled

  return (
    <StyledFieldset>
      <RadioContext.Provider value={{ isChecked, isDisabled, handleChange: onChange }}>
        {children}
      </RadioContext.Provider>
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset``

export default RadioGroup
