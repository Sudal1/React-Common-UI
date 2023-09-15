import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { colors } from 'lib/colors'

interface StyleProps {
  variant?: 'contained' | 'outlined' | 'ghost' | 'destructive' | 'text'
  size?: 'sm' | 'md' | 'lg'
  wide?: boolean
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {
  disabled?: boolean
  href?: string
  to?: string
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = 'contained',
      size = 'md',
      wide = false,
      disabled = false,
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
          href={href}
          ref={ref}
          disabled={disabled}
        >
          {rest.children}
        </AnchorButton>
      )
    }

    if (to) {
      return (
        <LinkButton variant={variant} size={size} wide={wide} to={to} ref={ref} disabled={disabled}>
          {rest.children}
        </LinkButton>
      )
    }

    return (
      <DefaultButton variant={variant} size={size} wide={wide} ref={ref} disabled={disabled}>
        {rest.children}
      </DefaultButton>
    )
  }
)

Button.displayName = `'Button'`

const variantStyle = {
  contained: css`
    background: ${colors.primary};
    color: #fff;

    &:hover {
      background: ${colors.primaryHover};
    }

    &:active {
      background: ${colors.primaryActive};
    }
  `,
  outlined: css`
    border: 1px solid ${colors.primary};
    color: ${colors.primary};

    &:hover {
      color: ${colors.primaryHover};
      border-color: ${colors.primaryHover};
    }

    &:active {
      color: ${colors.primaryActive};
      border-color: ${colors.primaryActive};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${colors.primary};

    &:hover {
      background: ${colors.primaryHoverLight};
      color: ${colors.primary};
    }

    &:active {
      background: ${colors.primaryActiveLight};
      color: ${colors.primaryActive};
    }
  `,
  destructive: css`
    background: ${colors.destructive};
    color: #fff;

    &:hover {
      background: ${colors.destructiveHover};
    }

    &:active {
      background: ${colors.destructiveActive};
    }
  `,
  text: css`
    color: ${colors.gray3};

    &:hover {
      background: ${colors.gray0};
      color: ${colors.gray3};
    }

    &:active {
      background: ${colors.gray1};
      color: ${colors.gray5};
    }
  `,
}

const sizeStyle = {
  sm: css`
    font-size: 1.2rem;
    padding: 0 1.2rem;
    height: 3.2rem;
  `,
  md: css`
    font-size: 1.4rem;
    padding: 0 1.6rem;
    height: 4rem;
  `,
  lg: css`
    font-size: 1.6rem;
    padding: 0 2.4rem;
    height: 4.8rem;
  `,
}

const commonStyle = (props: StyleProps) => css`
  display: flex;
  align-items: center;
  justyfy-content: center;
  font-weight: 500;
  border: 0;
  border-radius: 2.4rem;
  transition: all 0.5s ease;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    filter: grayscale(0.7);
  }

  ${sizeStyle[props.size!]}
  ${variantStyle[props.variant!]}

  ${props.wide &&
  css`
    width: 100%;
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

export default Button
