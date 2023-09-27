import styled from '@emotion/styled'
import CheckboxContext from 'contexts/checkboxGroup'

interface Props {
  label: string
  selectedValues: (string | number)[]
  groupDisabled?: boolean
  children: React.ReactNode
  onChange(values: (string | number)[]): void
}

const CheckboxGroup = ({
  label,
  selectedValues,
  groupDisabled = false,
  children,
  onChange,
}: Props) => {
  const isChecked = (value: string | number) => selectedValues.includes(value)

  const isDisabled = (disabled?: boolean) => disabled || groupDisabled

  const handleChange = ({ checked, value }: { checked: boolean; value: string | number }) => {
    if (checked) {
      onChange([...selectedValues, value])
    } else {
      onChange(selectedValues.filter((v) => v !== value))
    }
  }

  return (
    <StyledFieldset>
      <StyledLabel>{label}</StyledLabel>
      <CheckboxContext.Provider value={{ isChecked, isDisabled, handleChange }}>
        {children}
      </CheckboxContext.Provider>
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset``

const StyledLabel = styled.legend`
  font-size: 1.6rem;
  font-weight: 500;
`

export default CheckboxGroup
