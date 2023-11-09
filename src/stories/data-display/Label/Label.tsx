import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

type variantType = 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative'

interface Props {
  variant?: variantType
  size?: 'sm' | 'md'
  children: React.ReactNode
}

const Chip = ({ variant = 'primary', size = 'sm', children }: Props) => {
  return (
    <>
      <StyledLabel variant={variant} size={size}>
        {children}
      </StyledLabel>
    </>
  )
}

const variantStyle = {
  primary: css`
    background-color: ${colors.primary};
  `,
  secondary: css`
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  `,
  tertiary: css`
    color: ${colors.gray3};
    border: 1px solid ${colors.gray2};
  `,
  positive: css`
    background-color: ${colors.positive};
  `,
  negative: css`
    background-color: ${colors.negative};
  `,
}

const sizeStyle = {
  sm: css`
    font-size: 1.2rem;
    height: 2.8rem;
  `,
  md: css`
    font-size: 1.4rem;
    height: 3.2rem;
  `,
}

const StyledLabel = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.2rem 0 0;
  border-radius: 0.4rem;
  transition: all 0.25s;
  padding: 0 0.8rem;
  color: #fff;

  &:last-child {
    margin: 0;
  }

  ${(props) => sizeStyle[props.size!]}
  ${(props) => variantStyle[props.variant!]}
`

export default Chip
