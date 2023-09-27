import { createContext } from 'react'

interface RadioGroupContext {
  isChecked(value: string | number): boolean
  isDisabled(disabled?: boolean): boolean
  handleChange(value: string | number): void
}

const RadioContext = createContext<RadioGroupContext | null>(null)

export default RadioContext
