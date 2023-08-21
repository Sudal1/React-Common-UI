import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { colors } from 'lib/colors'

interface StyleProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md'
  wide?: boolean
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {
  href?: string
  to?: string
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', wide = false, href, to, ...rest }: Props, ref: any) => {
    if (href) {
      return (
        <AnchorButton variant={variant} size={size} wide={wide} href={href} ref={ref}>
          {rest.children}
        </AnchorButton>
      )
    }

    if (to) {
      return (
        <LinkButton variant={variant} size={size} wide={wide} to={to} ref={ref}>
          {rest.children}
        </LinkButton>
      )
    }

    return (
      <DefaultButton variant={variant} size={size} wide={wide} ref={ref}>
        {rest.children}
      </DefaultButton>
    )
  }
)

Button.displayName = `'Button'`

const variantStyle = {
  primary: css`
    background: ${colors.primary};
    color: #fff;
  `,
  secondary: css`
    background: ${colors.secondary};
    color: #fff;
  `,
  ghost: css`
    border: 1px solid ${colors.gray1};
    background: transparent;
    color: ${colors.gray3};
  `,
  destructive: css`
    background: ${colors.destructive};
    color: #fff;
  `,
}

const sizeStyle = {
  sm: css`
    font-size: 1.2rem;
    padding: 0.8rem 0.8rem;
  `,
  md: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.2rem;
  `,
}

const commonStyle = (props: StyleProps) => css`
  display: flex;
  align-items: center;
  justyfy-content: center;
  font-weight: 500;
  border: 0;
  border-radius: 0.4rem;
  transition: all 0.5s ease;
  cursor: pointer;

  &:disabled {
    filter: grayscale(0.6);
  }

  ${sizeStyle[props.size!]}
  ${variantStyle[props.variant!]}

  ${props.wide &&
  css`
    width: 100%;
  `}
`

const AnchorButton = styled.a<StyleProps>`
  ${(props) => commonStyle(props)}
  text-decoration: none;
`
const LinkButton = styled(Link)<StyleProps>`
  ${(props) => commonStyle(props)}
  text-decoration: none;
`

const DefaultButton = styled.button<StyleProps>`
  ${(props) => commonStyle(props)}
`

export default Button
