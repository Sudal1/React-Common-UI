import { createContext } from 'react'

interface CheckboxGroupContext {
  isChecked(value?: string | number): boolean
  isDisabled(disabled?: boolean): boolean
  handleChange({ checked, value }: { checked: boolean; value: string | number }): void
}

const CheckboxContext = createContext<CheckboxGroupContext | null>(null)

export default CheckboxContext
