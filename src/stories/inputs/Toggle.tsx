import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

interface Props {
  checked: boolean
  disabled?: boolean
  children?: React.ReactNode | null
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Toggle = ({ checked, disabled = false, children = null, onChange }: Props) => {
  return (
    <StyledLabel disabled={disabled}>
      {children}
      <StyledToggle
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        hasChildren={children !== null}
        onChange={onChange}
      />
    </StyledLabel>
  )
}

const StyledToggle = styled.input<{ hasChildren?: React.ReactNode }>`
  outline: none;
  appearance: none;
  position: relative;
  border: max(0.2rem, 0.1rem) solid ${colors.gray1};
  border-radius: 1.25em;
  width: 4.8rem;
  height: 2.4rem;
  transition: all 0.25s;

  &:checked {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: ${colors.gray1};
    transition: left 160ms linear;
  }

  &:checked::before {
    background-color: white;
    left: 2.6rem;
  }

  ${(props) =>
    props.hasChildren &&
    css`
      margin-left: 0.4rem;
    `}
`

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${colors.gray4};
  line-height: 1.1;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(0.7);
      cursor: not-allowed;
    `}
`

export default Toggle
