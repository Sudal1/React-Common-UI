import type { ReactNode, ChangeEvent } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

interface Props {
  checked: boolean
  disabled?: boolean
  children: ReactNode
  onChange(event: ChangeEvent<HTMLInputElement>): void
}

const Checkbox = ({ checked, disabled = false, children, onChange }: Props) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledCheckbox type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      {children}
    </StyledLabel>
  )
}

const StyledCheckbox = styled.input<{ disabled?: boolean }>`
  appearance: none;
  margin: 0 1.2rem 0 0;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid ${colors.gray1};
  border-radius: 0.4rem;
  position: relative;
  top: 0.1rem;
  transition: all 0.25s;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${colors.primary};
  }

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${colors.gray0};

      &:checked {
        background-color: ${colors.gray1};
      }
    `}
`

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${colors.gray4};
  transition: all 0.25s;

  ${(props) =>
    props.disabled &&
    css`
      color: ${colors.gray1};
    `}
`

export default Checkbox
