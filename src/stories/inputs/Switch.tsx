import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

type variantType = 'primary' | 'secondary' | 'tertiary'

interface Props {
  variant?: variantType
  checked: boolean
  disabled?: boolean
  children?: React.ReactNode | null
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Switch = ({
  variant = 'primary',
  checked,
  disabled = false,
  children = null,
  onChange,
  ...rest
}: Props) => {
  return (
    <StyledLabel disabled={disabled}>
      {children}
      <StyledSwitch
        type="checkbox"
        role="switch"
        variant={variant}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />
    </StyledLabel>
  )
}

const variantStyle = {
  primary: css`
    width: 4.8rem;
    height: 2.4rem;
    border-radius: 0;
    background: ${colors.gray1};
    border-radius: 0.4rem;

    &:checked {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
    }

    &::before {
      left: 0.4rem;
      top: 0.4rem;
      width: 1.6rem;
      height: 1.6rem;
      background-color: white;
      border-radius: 0.4rem;
    }

    &:checked::before {
      transform: translateX(2.4rem);
    }
  `,
  secondary: css`
    width: 4.8rem;
    height: 2.4rem;
    border: 0.2rem solid ${colors.gray1};

    &:checked {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
    }

    &::before {
      left: 0.2rem;
      top: 0.2rem;
      width: 1.6rem;
      height: 1.6rem;
      background-color: ${colors.gray1};
      border-radius: 50%;
    }

    &:checked::before {
      transform: translateX(2.4rem);
    }
  `,
  tertiary: css`
    width: 4.8rem;
    height: 0.6rem;
    background-color: ${colors.gray1};

    &:checked {
      background-color: ${colors.primary};
    }

    &::before {
      left: 0rem;
      top: -0.8rem;
      width: 1.8rem;
      height: 1.8rem;
      background-color: white;
      border: 1px solid ${colors.gray0};
      box-shadow: rgba(0, 0, 0, 0.32) 0px 1px 3.2px;
      border-radius: 50%;
    }

    &:checked::before {
      transform: translateX(3rem);
    }
  `,
}

const StyledSwitch = styled.input<Props>`
  position: relative;
  outline: none;
  appearance: none;
  border-radius: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    transition: transform 160ms linear;
  }

  &:checked::before {
    background-color: white;
  }

  ${(props) => variantStyle[props.variant!]}

  ${(props) =>
    props.children !== null &&
    css`
      margin-left: 0.8rem;
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: ${colors.gray4};
  line-height: 1.2;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(0.7);
    `}
`

export default Switch
