import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { colors } from 'lib/colors'

type variantType = 'primary' | 'secondary' | 'thrtiary'
type sizeType = 'sm' | 'md' | 'lg'

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'color'
>

interface StyleProps {
  variant?: variantType
  size?: sizeType
  wide?: boolean
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

interface Props extends StyleProps, MergedHTMLAttributes {
  children?: React.ReactNode
  href?: string
  to?: string
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      variant = 'primary',
      size = 'md',
      wide = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children = 'Button Text',
      href,
      to,
      ...rest
    }: Props,
    ref: any
  ) => {
    if (href) {
      return (
        <AnchorButton
          variant={variant}
          size={size}
          wide={wide}
          disabled={disabled}
          href={href}
          ref={ref}
          {...rest}
        >
          {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
          {children}
          {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
        </AnchorButton>
      )
    }

    if (to) {
      return (
        <LinkButton
          variant={variant}
          size={size}
          wide={wide}
          disabled={disabled}
          to={to}
          ref={ref}
          {...rest}
        >
          {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
          {children}
          {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
        </LinkButton>
      )
    }

    return (
      <DefaultButton
        variant={variant}
        size={size}
        wide={wide}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
        {children}
        {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
      </DefaultButton>
    )
  }
)

Button.displayName = `'Button'`

const variantStyle = {
  primary: css`
    background-color: ${colors.primary};
    color: #fff;

    &:hover {
      background-color: ${colors.primaryHover};
    }

    &:active {
      background-color: ${colors.primaryActive};
    }
  `,
  secondary: css`
    border: 1px solid ${colors.primary};
    color: ${colors.primary};

    &:hover {
      background-color: ${colors.primaryHoverLight};
      border-color: ${colors.primaryHover};
      color: ${colors.primaryActive};
    }

    &:active {
      border-color: ${colors.primaryActive};
      background-color: ${colors.primaryActiveLight};
      color: ${colors.primaryActive};
    }
  `,

  thrtiary: css`
    color: ${colors.gray3};

    &:hover {
      background-color: ${colors.gray0};
    }

    &:active {
      color: ${colors.gray4};
      background-color: ${colors.gray1};
    }
  `,
}

const sizeStyle = {
  sm: css`
    font-size: 1.2rem;
    padding: 0 1.2rem;
    height: 3.2rem;
    max-height: 3.2rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  `,
  md: css`
    font-size: 1.4rem;
    padding: 0 1.6rem;
    height: 4rem;
    max-height: 4rem;
    svg {
      width: 2.4rem;
      heigth: 2.4rem;
    }
  `,
  lg: css`
    font-size: 1.6rem;
    padding: 0 2.4rem;
    height: 4.8rem;
    max-height: 4.8rem;
    svg {
      width: 3.2rem;
      heigth: 3.2rem;
    }
  `,
}

const commonStyle = (props: Props) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 0;
  border-radius: 2.4rem;
  transition: all 0.5s ease;
  cursor: pointer;
  margin-right: 0.8rem;
  line-height: 1.5;
  vertical-align: center;

  &:last-child {
    margin: 0;
  }

  ${sizeStyle[props.size!]}
  ${variantStyle[props.variant!]}

  ${props.wide &&
  css`
    width: 100%;
  `}

  ${props.disabled &&
  css`
    opacity: 0.4;
    filter: grayscale(0.7);
  `}
`

const AnchorButton = styled.a<Props>`
  ${(props) => commonStyle(props)}
  text-decoration: none;
`
const LinkButton = styled(Link)<Props>`
  ${(props) => commonStyle(props)}
  text-decoration: none;
`

const DefaultButton = styled.button<Props>`
  ${(props) => commonStyle(props)}
`

const LeftIcon = styled.span`
  margin-right: 0.6rem;
`

const RightIcon = styled.span`
  margin-left: 0.6rem;
`

export default Button
