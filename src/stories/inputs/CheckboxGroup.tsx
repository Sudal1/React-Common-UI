import styled from '@emotion/styled'
import Checkbox from './Checkbox'

interface Item {
  value: string | number
  disabled?: boolean
  children: React.ReactNode
}

interface Props {
  items: Item[]
  selectedValues: (string | number)[]
  groupDisabled?: boolean
  onChange(values: (string | number)[]): void
}

const CheckboxGroup = ({ items, selectedValues, groupDisabled = false, onChange }: Props) => {
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
      {items.map((item) => (
        <Checkbox
          key={item.value}
          value={item.value}
          checked={isChecked(item.value)}
          disabled={isDisabled(item.disabled)}
          onChange={(event) => handleChange({ checked: event.target.checked, value: item.value })}
        >
          {item.children}
        </Checkbox>
      ))}
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset``

export default CheckboxGroup
