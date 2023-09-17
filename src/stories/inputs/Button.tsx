import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { colors } from 'lib/colors'

type colorType = 'primary' | 'destructive'

type shapeType = 'contained' | 'outlined' | 'text'

type sizeType = 'sm' | 'md' | 'lg'

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'color'
>

interface StyleProps {
  color?: colorType
  shape?: shapeType
  size?: sizeType
  wide?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

interface Props extends StyleProps, MergedHTMLAttributes {
  children?: React.ReactNode
  href?: string
  to?: string
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      color = 'primary',
      shape = 'contained',
      size = 'md',
      wide = false,
      leftIcon,
      rightIcon,
      children,
      href,
      to,
      ...rest
    }: Props,
    ref: any
  ) => {
    if (href) {
      return (
        <AnchorButton color={color} shape={shape} size={size} wide={wide} href={href} ref={ref}>
          {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
          {children}
          {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
        </AnchorButton>
      )
    }

    if (to) {
      return (
        <LinkButton color={color} shape={shape} size={size} wide={wide} to={to} ref={ref}>
          {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
          {children}
          {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
        </LinkButton>
      )
    }

    return (
      <DefaultButton color={color} shape={shape} size={size} wide={wide} ref={ref} {...rest}>
        {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
        {children}
        {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
      </DefaultButton>
    )
  }
)

Button.displayName = `'Button'`

const colorStyle = (color: colorType) => css`
  border-color: ${colors[color]};
  color: ${colors[color]};
`

const backgroundStyle = (color: colorType) => css`
  background: ${colors[color]};

  &:hover {
    background: ${colors[(color + 'Hover') as colorType]};
  }
  &:active {
    background: ${colors[(color + 'Active') as colorType]};
  }
`

const sizeStyle = {
  sm: css`
    font-size: 1.2rem;
    padding: 0 1.2rem;
    height: 3.2rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  `,
  md: css`
    font-size: 1.4rem;
    padding: 0 1.6rem;
    height: 4rem;
    svg {
      width: 2.4rem;
      heigth: 2.4rem;
    }
  `,
  lg: css`
    font-size: 1.6rem;
    padding: 0 2.4rem;
    height: 4.8rem;
    svg {
      width: 3.2rem;
      heigth: 3.2rem;
    }
  `,
}

const commonStyle = (props: StyleProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 0;
  border-radius: 2.4rem;
  transition: all 0.5s ease;
  cursor: pointer;
  margin-right: 0.8rem;

  &:last-child {
    margin: 0;
  }

  &:disabled {
    opacity: 0.4;
    filter: grayscale(0.7);
  }

  ${sizeStyle[props.size!]}
  ${colorStyle(props.color!)}
  
  ${props.shape === 'contained' &&
  css`
    color: #fff;
    ${backgroundStyle(props.color!)}
  `}

  ${props.shape === 'outlined' &&
  css`
    border: 1px solid;
  `}

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

const LeftIcon = styled.span`
  margin-right: 0.6rem;
`

const RightIcon = styled.span`
  margin-left: 0.6rem;
`

export default Button
