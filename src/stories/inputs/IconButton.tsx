import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { colors } from 'lib/colors'

interface StyleProps {
  variant?: 'contained' | 'outlined' | 'ghost'
  size?: 'sm' | 'md'
  disabled?: boolean
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {
  children: any
  href?: string
  to?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    { variant = 'contained', size = 'md', href, to, disabled = false, ...rest }: Props,
    ref: any
  ) => {
    if (href) {
      return (
        <AnchorButton variant={variant} size={size} href={href} ref={ref} disabled={disabled}>
          {rest.children}
        </AnchorButton>
      )
    }

    if (to) {
      return (
        <LinkButton variant={variant} size={size} to={to} ref={ref} disabled={disabled}>
          {rest.children}
        </LinkButton>
      )
    }

    return (
      <DefaultButton variant={variant} size={size} ref={ref} disabled={disabled}>
        {rest.children}
      </DefaultButton>
    )
  }
)

IconButton.displayName = `'Button'`

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
    background: #fff;
    border: 1px solid ${colors.gray1};
    color: ${colors.gray2};

    &:hover {
      border-color: ${colors.gray2};
      background: ${colors.gray0};
      color: ${colors.gray3};
    }

    &:active {
      border-color: ${colors.gray2};
      background: ${colors.gray0};
      color: ${colors.gray4};
    }
  `,
  ghost: css`
    background: #fff;
    color: ${colors.gray3};

    &:hover {
      background: ${colors.gray0};
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
    padding: 0.4rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  `,
  md: css`
    font-size: 1.4rem;
    padding: 0.6rem;

    svg {
      width: 2.4rem;
      heigth: 2.4rem;
    }
  `,
}

const commonStyle = (props: StyleProps) => css`
  display: flex;
  align-items: center;
  justyfy-content: center;
  border-radius: 0.4rem;
  font-weight: 500;
  border: 0;
  transition: all 0.5s ease;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    filter: grayscale(0.7);
  }

  ${sizeStyle[props.size!]}
  ${variantStyle[props.variant!]}
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

export default IconButton
