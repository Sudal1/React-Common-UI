import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

type variantType = 'primary' | 'secondary' | 'tertiary'

interface Props {
  variant?: variantType
  children?: React.ReactNode
  index?: number
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isActive?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Tab = ({
  variant = 'primary',
  children = 'tab',
  index,
  leftIcon,
  rightIcon,
  isActive,
  disabled,
  onClick,
}: Props) => {
  return (
    <>
      <StyledTab variant={variant} index={index} isActive={isActive} disabled={disabled} onClick={onClick}>
        {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
        {children}
        {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
      </StyledTab>
    </>
  )
}

const variantStyle = {
  primary: css`
    border-bottom: 2px solid ${colors.gray1};
    background: white;
    border-radius: 0.4rem 0.4rem 0 0;
  `,
  secondary: css`
    border: 1px solid ${colors.gray1};
    border-radius: 2.4rem;
    background: white;
  `,
  tertiary: css`
    border-radius: 2.4rem;
    background: white;
  `,
}

const colorStyle = {
  primary: css`
    border-color: ${colors.primary};
  `,
  secondary: css`
    border-color: ${colors.primary};
  `,
  tertiary: css`
    color: white;
    background: ${colors.primary};
  `,
}

const StyledTab = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: fit-content;
  height: 3.2rem;
  padding: 0 2.4rem;
  color: ${colors.gray3};
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background: ${colors.gray0};
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  ${(props) => variantStyle[props.variant!]}
  ${(props) => props.isActive && colorStyle[props.variant!]}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(0.7);
      cursor: not-allowed;
    `}
`
const LeftIcon = styled.div<Props>`
  margin-right: 0.8rem;
  color: ${colors.gray3};
`

const RightIcon = styled.div<Props>`
  margin-left: 0.8rem;
  color: ${colors.gray3};
`

export default Tab
