import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import Checkbox from './Checkbox'

export interface Item {
  value: string
  disabled?: boolean
  children: ReactNode
}

interface Props {
  items: Item[]
  selectedItems: Item[]
  groupDisabled?: boolean
  onChange(items: Item[]): void
}

const CheckboxGroup = ({ items, selectedItems, groupDisabled = false, onChange }: Props) => {
  const isDisabled = (disabled?: boolean) => disabled || groupDisabled

  const isChecked = (value: string) => selectedItems.map((item) => item.value).includes(value)

  const handleChange = ({ checked, item }: { checked: boolean; item: Item }) => {
    if (checked) {
      onChange([...selectedItems, item])
    } else {
      onChange(selectedItems.filter(({ value }) => value !== item.value))
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
          onChange={(event) => handleChange({ checked: event.target.checked, item })}
        >
          {item.children}
        </Checkbox>
      ))}
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset``

export default CheckboxGroup
