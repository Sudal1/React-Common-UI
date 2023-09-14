import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import CheckboxContext from 'context/checkboxGroup'

interface Props {
  selectedValues: (string | number)[]
  groupDisabled?: boolean
  children: ReactNode
  onChange(items: (string | number)[]): void
}

const CheckboxGroup = ({ selectedValues, groupDisabled = false, children, onChange }: Props) => {
  const isChecked = (value: string) => selectedValues.includes(value)

  const isDisabled = (disabled?: boolean) => disabled || groupDisabled

  const handleChange = ({ checked, value }: { checked: boolean; value: string }) => {
    if (checked) {
      onChange([...selectedValues, value])
    } else {
      onChange(selectedValues.filter((v) => v !== value))
    }
  }

  return (
    <StyledFieldset>
      <CheckboxContext.Provider value={{ isChecked, isDisabled, handleChange }}>
        {children}
      </CheckboxContext.Provider>
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset``

export default CheckboxGroup
