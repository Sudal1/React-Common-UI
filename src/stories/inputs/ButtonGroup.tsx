import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

type variantType = 'primary' | 'secondary' | 'tertiary'
type sizeType = 'sm' | 'md' | 'lg'

interface Props {
  variant?: variantType
  size?: sizeType
  children: React.ReactNode
}

const CheckboxGroup = ({ variant = 'primary', size = 'md', children }: Props) => {
  return (
    <ButtonGroup variant={variant} size={size}>
      {children}
    </ButtonGroup>
  )
}

const variantStyle = {
  primary: css`
    & > button,
    a {
      border-right: 1px solid ${colors.primaryDark};
    }
  `,
  secondary: css`
    & > button,
    a {
      border: 1px solid ${colors.primaryLight};
      margin-right: -0.1rem;
    }
  `,

  tertiary: css`
    & > button,
    a {
      border-radius: 0;
      border-right: 1px solid ${colors.gray0};
      color: ${colors.gray3};

      &:hover {
        background-color: ${colors.gray0};
        color: ${colors.gray3};
      }

      &:active {
        background-color: ${colors.gray1};
        color: ${colors.gray5};
      }

      &:last-child {
        border: 0;
      }
    }
  `,
}

const commonStyle = (props: Props) => css`
  display: flex;
  align-items: center;

  & > button,
  a {
    border-radius: 0;
    font-weight: 400;
    margin: 0;
  }

  ${props.variant !== 'primary' &&
  css`
    & > button,
    a {
      background: #fff;
      color: ${colors.primary};

      &:hover {
        background-color: ${colors.primaryHoverLight};
        color: ${colors.primaryActive};
      }

      &:active {
        background-color: ${colors.primaryActiveLight};
        color: ${colors.primaryActive};
      }
    }
  `}

  ${props.variant !== 'tertiary' &&
  css`
    & > button:first-child {
      border-radius: 0.4rem 0 0 0.4rem;
    }

    & > button:last-child {
      border-radius: 0 0.4rem 0.4rem 0;
    }
  `}

  ${variantStyle[props.variant!]}
`

const ButtonGroup = styled.div<Props>`
  ${(props) => commonStyle(props)}
`

export default CheckboxGroup
